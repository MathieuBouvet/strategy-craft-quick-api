const db = require("./db.service");
const baseService = require("./base.service");
const HttpError = require("../utils/HttpErrors");

function getProduction(base, ressourceName) {
  return base.get("productions").get(ressourceName);
}

function getProductionByBaseId(baseId, ressourceName) {
  const base = baseService.getBaseById(baseId);
  return base.get("productions").get(ressourceName);
}

function validateRessourceName(ressourceName) {
  if (!["wood", "food", "ore"].includes(ressourceName)) {
    throw new HttpError(400, "Invalid ressource name");
  }
  return ressourceName;
}

module.exports = {
  getProduction,
  getProductionByBaseId,
  validateRessourceName,
};
