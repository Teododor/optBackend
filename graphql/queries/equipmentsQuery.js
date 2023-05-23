const {
  GraphQLList,
  GraphQLID
} = require("graphql");
const equipmentType = require("../types/equipmentType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(equipmentType),
  args: {
    joinerId: {
      type: GraphQLID,
    }
  },
  resolve: async (_, { joinerId }) => {
    if(!joinerId) {
      return models.Equipment.findAll();
    }
    return models.Equipment.findAll({
      include: {
        model: models.NewJoiner,
        where: { id: joinerId },
        through: { attributes: [] }
      }
    });
  }
}
