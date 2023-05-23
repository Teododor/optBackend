const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');

const equipmentType = new GraphQLObjectType({
    name: 'Equipment',
    fields: {
        id: {
            type : GraphQLID
        },
        name: {
            type : GraphQLString
        },
        specifications: {
            type: GraphQLString
        },
        quantity: {
            type: GraphQLInt
        },
        position: {
            type: new GraphQLList(GraphQLString)
        }
    }
})

module.exports = equipmentType;