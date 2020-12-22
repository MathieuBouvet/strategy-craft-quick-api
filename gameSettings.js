function coefficient(fraction) {
  return value => Math.floor(fraction * value);
}

function genericGrowthFunction(n, z) {
  return p => x => (x < -p ? 1 : (0.05 * Math.pow(x + p, n)) / z + 1);
}

const baseGrowthFunction = genericGrowthFunction(3.3, 51.7);
const defaultGrowt = baseGrowthFunction(0);
const laggingGrowt = baseGrowthFunction(-5);
const zero = x => 0;

const halfOf = coefficient(1 / 2);
const thirdOf = coefficient(1 / 3);
const quarterOf = coefficient(1 / 4);

const startingRessources = {
  wood: 300,
  food: 200,
  ore: 100,
  workers: 25,
};
const productionSettings = {
  wood: {
    hourlyProduction: 10,
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: halfOf(startingRessources.wood),
      food: 0,
      ore: halfOf(startingRessources.ore),
    },
    upgradeGrowth: {
      wood: defaultGrowt,
      food: zero,
      ore: laggingGrowt,
    },
  },
  food: {
    hourlyProduction: 10,
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: quarterOf(startingRessources.wood),
      food: thirdOf(startingRessources.food),
      ore: quarterOf(startingRessources.ore),
    },
    upgradeGrowth: {
      wood: defaultGrowt,
      food: defaultGrowt,
      ore: laggingGrowt,
    },
  },
  ore: {
    hourlyProduction: 10,
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: quarterOf(startingRessources.wood),
      food: 0,
      ore: quarterOf(startingRessources.ore),
    },
    upgradeGrowth: {
      wood: defaultGrowt,
      food: zero,
      ore: laggingGrowt,
    },
  },
};

module.exports = { productionSettings, startingRessources };
