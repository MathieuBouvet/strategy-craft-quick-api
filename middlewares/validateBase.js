const baseService = require("../services/base.service");
const requireExistingBase = require("../utils/requireDbResult")("Base");

function validateBase(req, res, next) {
  const baseId = parseInt(req.params.baseId);
  req.base = requireExistingBase(baseService.getBaseById(baseId));
  next();
}

module.exports = validateBase;
