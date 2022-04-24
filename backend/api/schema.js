
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root query object',
    fields: {
        name: {
            type: GraphQLString,
            resolve: ()=>'Hello world'
        }
    }
})

const schema = new GraphQLSchema({
    query: QueryType
})

module.exports = schema