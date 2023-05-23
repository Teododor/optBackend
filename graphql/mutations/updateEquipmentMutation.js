const {
    GraphQLNonNull,
    GraphQLString, 
    GraphQLID, 
    GraphQLInt
  } = require("graphql");
  const equipmentType = require("../types/equipmentType");
  const updateEquipmentResolver = require('../resolvers/updateEquipmentResolver');
  
  module.exports = {
    type: equipmentType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      name: {
        type: GraphQLString,
      },
      specifications: {
        type: GraphQLString,
      },
      quantity: {
        type: GraphQLInt,
      }
    },
    resolve: updateEquipmentResolver,
  }
  