const models = require("../../models");
module.exports = (source, { id }) => {
  return models.NewJoiner.destroy({
    where: {
      id,
    }
  })
}
