
const { 
    GraphQLScalarType, GraphQLError, Kind
 } = require('graphql')
const {isISO8601} = require('validator')

exports.DateScalar = new GraphQLScalarType({
    name: 'DateTime',
    description: 'The date time scalar type',
    serialize: (value) => {
        const valueAsISO = value.toISOString()
        if (isISO8601(valueAsISO)){
            return valueAsISO
        }
        return new GraphQLError("Can't serialize non ISO8601 to date string.")
    },
    parseLiteral: (ast) => {
        if(ast.kind == Kind.STRING){
            return new Date(ast.value)
        }
    },
    parseValue: (value) => {
        return new Date(value)
    }
})

