const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
  } = require("graphql");
  const equipmentType = require("../types/equipmentType");
  const createEquipmentResolver = require('../resolvers/createEquipmentResolver');
  
  module.exports = {
    type: equipmentType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      specifications: {
        type: new GraphQLNonNull(GraphQLString),
      },
      quantity: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: createEquipmentResolver,
  }
  