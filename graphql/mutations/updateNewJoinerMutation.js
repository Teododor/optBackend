const {
    GraphQLNonNull,
    GraphQLString, 
    GraphQLID,
  } = require("graphql");
  const newJoinerType = require("../types/newJoinerType");
  const updateNewJoinerResolver = require('../resolvers/updateNewJoinerResolver');
  
  module.exports = {
    type: newJoinerType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString,
      }
    },
    resolve: updateNewJoinerResolver,
  }
  