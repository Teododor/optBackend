const models = require("../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    name,
    specifications,
    quantity,
  } = args;
  if(!tokenPayload) {
    return null;
  }
  await models.Equipment.update({
    name,
    specifications,
    quantity
  }, {
    where: {
      id,
    }
  });
  return models.Equipment.findByPk(id);
}
