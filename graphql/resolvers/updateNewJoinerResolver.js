const models = require("../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    firstName,
    lastName,
  } = args;
  if(!tokenPayload) {
    return null;
  }
  await models.NewJoiner.update({
    firstName,
    lastName
  }, {
    where: {
      id,
    }
  });
  return models.NewJoiner.findByPk(id);
}
