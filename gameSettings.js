const productionSettings = {
  wood: {
    hourlyProduction: 10,
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: 10,
      food: 0,
      ore: 0,
    },
  },
  food: {
    hourlyProduction: 10,
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: 0,
      food: 10,
      ore: 0,
    },
  },
  ore: {
    hourlyProduction: 10,
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: 0,
      food: 0,
      ore: 10,
    },
  },
};

module.exports = { productionSettings };
