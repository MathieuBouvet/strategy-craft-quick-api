const {
  getNextLevelCost,
  getUpgradeTime,
} = require("../services/production.service");

function getProduction(req, res) {
  res.json({
    name: req.production.name,
    nextLevelCost: getNextLevelCost(req.production),
    upgradeTime: getUpgradeTime(req.production),
    ...req.production.data.value(),
  });
}

module.exports = { getProduction };
