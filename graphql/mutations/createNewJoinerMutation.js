const {
    GraphQLNonNull,
    GraphQLString,
  } = require("graphql");
  const newJoinerType = require("../types/newJoinerType");
  const createNewJoinerResolver = require('../resolvers/createNewJoinerResolver');
  
  module.exports = {
    type: newJoinerType,
    args: {
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve: createNewJoinerResolver,
  }
  