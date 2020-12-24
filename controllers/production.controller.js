const {
  getNextLevelRessourceCost,
  getNextLevelWorkerCost,
  getRepresentation,
  isThereEnoughWorkersToUpgrade,
  setPendingUpgrade,
  getWorkersToRemoveFromIdlePool,
} = require("../services/production.service");
const {
  isThereEnoughRessources,
  removeFromStock,
} = require("../services/base.service");
const requireEnoughStock = require("../services/requireEnoughStock");

function getProduction(req, res) {
  res.json(getRepresentation(req.production));
}

function upgrade(req, res) {
  const productionData = req.production.data.value();
  if (productionData.pendingUpgrade != null) {
    return res.status(204).json();
  }
  const ressourceCostToUpgrade = getNextLevelRessourceCost(req.production);
  const workerCostToUpgrade = getNextLevelWorkerCost(req.production);
  const enoughRessourcesAndWorkers = {
    ...isThereEnoughRessources(req.base, ressourceCostToUpgrade),
    workers: isThereEnoughWorkersToUpgrade(
      req.base,
      req.production,
      workerCostToUpgrade
    ),
  };
  requireEnoughStock(enoughRessourcesAndWorkers, 409);

  const workersToRemoveFromIdlePool = getWorkersToRemoveFromIdlePool(
    req.production,
    workerCostToUpgrade
  );

  removeFromStock(req.base, {
    ...ressourceCostToUpgrade,
    idleWorkers: workersToRemoveFromIdlePool,
  });

  setPendingUpgrade(req.production, {
    ...ressourceCostToUpgrade,
    workers: workerCostToUpgrade,
  });
  res.json(getRepresentation(req.production));
}

module.exports = { getProduction, upgrade };
