const models = require("../../models");
module.exports = async (source, { firstName, lastName }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }
  const newJoiner = await models.NewJoiner.create({
    firstName,
    lastName
  });
  return newJoiner;
}
