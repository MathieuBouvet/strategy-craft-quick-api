const db = require("./db.service");
const baseService = require("./base.service");
const HttpError = require("../utils/HttpErrors");
const { productionSettings } = require("../gameSettings");
const objectMap = require("../utils/objectMap");

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

function getNextLevelCost(production) {
  const ressourceName = production.name;
  const currentLevel = production.data.value().level;
  const upgradeBaseCost = productionSettings[ressourceName].upgradeCosts;
  const costFn = cost => currentLevel * cost;
  return objectMap(upgradeBaseCost, costFn);
}

module.exports = {
  getProduction,
  getProductionByBaseId,
  validateRessourceName,
  getNextLevelCost,
};
