const {
  GraphQLNonNull, 
  GraphQLID
} = require("graphql");
const models = require("../../models");
const equipmentType = require("../types/equipmentType");

module.exports = {
  type: equipmentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    const equipmentData = await models.Equipment.findByPk(id);
    return equipmentData;
  }
}
