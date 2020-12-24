const {
  getNextLevelRessourceCost,
  getNextLevelWorkerCost,
  getUpgradeTime,
} = require("../services/production.service");

function getProduction(req, res) {
  const nextLevelCost = {
    ...getNextLevelRessourceCost(req.production),
    workers: getNextLevelWorkerCost(req.production),
  };
  res.json({
    name: req.production.name,
    nextLevelCost,
    upgradeTime: getUpgradeTime(req.production),
    ...req.production.data.value(),
  });
}

module.exports = { getProduction };
