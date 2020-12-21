const productionService = require("../services/production.service");
const requireExistingProduction = require("../utils/requireDbResult")(
  "Production"
);

function validateProduction(req, res, next) {
  const base = req.base;
  const ressourceName = productionService.validateRessourceName(
    req.params.ressourceName
  );
  req.production = {
    data: requireExistingProduction(
      productionService.getProduction(base, ressourceName)
    ),
    name: ressourceName,
  };
  next();
}

module.exports = validateProduction;
