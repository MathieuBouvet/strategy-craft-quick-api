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

  const workerCost = productionSettings[ressourceName].upgradeWorkerCost;
  const ressourceCostFn = cost =>
    Math.floor(cost.value * cost.growth(currentLevel));
  return {
    ...objectMap(upgradeBaseCost, ressourceCostFn),
    workers: workerCost,
  };
}

function getUpgradeTime(production) {
  return (
    productionSettings[production.name].upgradeTime *
    production.data.value().level
  );
}

function getUpgradeReadyTime(production) {
  return Date.now() + getUpgradeTime(production);
}

module.exports = {
  getProduction,
  getProductionByBaseId,
  validateRessourceName,
  getNextLevelCost,
  getUpgradeReadyTime,
  getUpgradeTime,
};
