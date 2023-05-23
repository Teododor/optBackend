const models = require("../../models");
module.exports = async (source, { name, specifications, quantity }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }
  const equipment = await models.Equipment.create({
    name,
    specifications,
    quantity
  });
  return equipment;
}
