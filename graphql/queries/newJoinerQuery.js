const {
  GraphQLNonNull, 
  GraphQLID
} = require("graphql");
const newJoinerType = require("../types/newJoinerType");
const models = require("../../models");

module.exports = {
  type: newJoinerType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    const newJoinerData = await models.NewJoiner.findByPk(id);
    return newJoinerData;
  }
}
