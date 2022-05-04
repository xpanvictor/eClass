
const { 
    GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID,
} = require('graphql')
const { DateScalar } = require('./Scalars')
const { call } = require('./controllers/query')
const { createUser, deleteUser } = require('./controllers/mutate')


const UserObject = new GraphQLObjectType({
    name: 'User',
    description: 'The object type for a user',
    fields: () => ({
        id: {type: GraphQLID},
        fullname: {type: GraphQLString},
        name: {
            type: new GraphQLObjectType({
                name: 'fullname',
                description: 'The complete name object',
                fields: () => ({
                    first: {type: GraphQLString},
                    last: {type: GraphQLString}
                })
            })
        },
        username: {type: GraphQLString},
        dob: {type: DateScalar},
        email: {type: GraphQLString},
        createdAt: {type: DateScalar}
    })
})

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root query object',
    fields: {
        userByUsername: {
            type: UserObject,
            args: {
                username: {type: GraphQLString}
            },
            resolve: (_, args) => call(args.username)
        }
    }
})

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The root mutation type',
    fields: () => ({
        createUser: {
            type: UserObject,
            args: {
                username: {type: GraphQLString},
                email: {type: GraphQLString},
                dob: {type: DateScalar},
                password: {type: GraphQLString}
            },
            resolve: (_, args) => createUser(args)
        },
        deleteUser: {
            type: UserObject,
            args: {
                username: {type: GraphQLString}
            },
            resolve: (_, args) => deleteUser(args.username)
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

module.exports = schema