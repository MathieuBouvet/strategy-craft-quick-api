const baseService = require("../services/base.service");
const requireExistingBase = require("../utils/requireDbResult")("Base");

function getBase(req, res) {
  const baseId = parseInt(req.params.id);
  const base = requireExistingBase(baseService.getBaseById(baseId)).value();
  const { id, owner, idleWorkers, wood, food, ore } = base;
  res.json({
    id,
    owner,
    idleWorkers,
    wood,
    food,
    ore,
  });
}

module.exports = { getBase };
