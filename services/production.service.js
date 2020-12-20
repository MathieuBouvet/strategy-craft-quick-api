const db = require("./db.service");
const baseService = require("./base.service");

function getProduction(base, ressourceName) {
  return base.get("productions").get(ressourceName);
}

function getProductionByBaseId(baseId, ressourceName) {
  const base = baseService.getBaseById(baseId);
  return base.get("productions").get(ressourceName);
}

module.exports = { getProduction, getProductionByBaseId };
