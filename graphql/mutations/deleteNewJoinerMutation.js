const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
  } = require("graphql");
  
  const deleteNewJoinerResolver = require('../resolvers/deleteNewJoinerResolver');
  
  module.exports = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteNewJoinerResolver,
  };
  