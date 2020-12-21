const { getNextLevelCost } = require("../services/production.service");

function getProduction(req, res) {
  res.json({
    name: req.production.name,
    nextLevelCost: getNextLevelCost(req.production),
    ...req.production.data.value(),
  });
}

module.exports = { getProduction };
