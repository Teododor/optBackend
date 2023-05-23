const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
  } = require("graphql");
  
  const deleteEquipmentResolver = require('../resolvers/deleteEquipmentResolver');
  
  module.exports = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteEquipmentResolver,
  };
  