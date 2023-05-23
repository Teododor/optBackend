const models = require("../../models");
module.exports = (source, { id }) => {
  return models.Equipment.destroy({
    where: {
      id,
    }
  })
}
