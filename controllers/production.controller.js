const productionService = require("../services/production.service");
const baseService = require("../services/base.service");
const requireExistingProduction = require("../utils/requireDbResult")(
  "Production"
);
const requireExistingBase = require("../utils/requireDbResult")("Base");

function getProduction(req, res) {
  const baseId = parseInt(req.params.baseId);
  const base = requireExistingBase(baseService.getBaseById(baseId));
  const ressourceName = productionService.validateRessourceName(
    req.params.ressourceName
  );
  const production = requireExistingProduction(
    productionService.getProduction(base, ressourceName)
  ).value();
  const productionData = { name: ressourceName, ...production };
  res.json(productionData);
}

module.exports = { getProduction };
