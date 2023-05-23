const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');

const newJoinerType = new GraphQLObjectType({
    name: 'NewJoiner',
    fields: {
        id: {
            type : GraphQLID
        },
        firstName: {
            type : GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    }
})

module.exports = newJoinerType;
