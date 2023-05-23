const {
  GraphQLList,
  GraphQLID
} = require("graphql");
const newJoinerType = require("../types/newJoinerType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(newJoinerType),
  args: {
    equipmentId: {
      type: GraphQLID,
    }
  },
  resolve: async (_, { equipmentId }) => {
    if(!equipmentId) {
      return models.NewJoiner.findAll();
    }
    return models.NewJoiner.findAll({
      include: {
        model: models.Equipment,
        where: { id: equipmentId },
        through: { attributes: [] }
      }
    });
  }
}
