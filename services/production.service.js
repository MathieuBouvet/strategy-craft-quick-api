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

function getNextLevelRessourceCost(production) {
  const ressourceName = production.name;
  const currentLevel = production.data.value().level;

  const upgradeBaseCost = productionSettings[ressourceName].upgradeCosts;

  const ressourceCostFn = cost =>
    Math.floor(cost.value * cost.growth(currentLevel));

  return objectMap(upgradeBaseCost, ressourceCostFn);
}

function getNextLevelWorkerCost(production) {
  const ressourceName = production.name;
  return productionSettings[ressourceName].upgradeWorkerCost;
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

function isThereEnoughWorkersToUpgrade(base, production, workerCost) {
  const baseData = base.value();
  const productionData = production.data.value();
  return baseData.idleWorkers + productionData.workers >= workerCost;
}

function getRepresentation(production) {
  const nextLevelCost = {
    ...getNextLevelRessourceCost(production),
    workers: getNextLevelWorkerCost(production),
  };
  return {
    name: production.name,
    nextLevelCost,
    upgradeTime: getUpgradeTime(production),
    ...production.data.value(),
  };
}

function setPendingUpgrade(production, upgradeCosts) {
  const { workers, ...ressources } = upgradeCosts;
  production.data
    .set("pendingUpgrade.paidRessources", ressources)
    .set("pendingUpgrade.workers", workers)
    .set("pendingUpgrade.readyAt", getUpgradeReadyTime(production))
    .write();
}

module.exports = {
  getProduction,
  getProductionByBaseId,
  validateRessourceName,
  getNextLevelRessourceCost,
  getUpgradeReadyTime,
  getUpgradeTime,
  getNextLevelWorkerCost,
  isThereEnoughWorkersToUpgrade,
  getRepresentation,
  setPendingUpgrade,
};
