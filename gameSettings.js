function coefficient(fraction) {
  return value => Math.floor(fraction * value);
}

function genericGrowthFunction(n, z) {
  return p => x => (x < -p ? 1 : (0.05 * Math.pow(x + p, n)) / z + 1);
}

const baseGrowthFunction = genericGrowthFunction(3.3, 51.7);
const defaultGrowt = baseGrowthFunction(0);
const laggingGrowt = baseGrowthFunction(-5);
const zero = () => 0;

const oneHalfOf = coefficient(1 / 2);
const oneThirdOf = coefficient(1 / 3);
const oneQuarterOf = coefficient(1 / 4);
const oneHundredthOf = coefficient(1 / 100);

const startingRessources = {
  wood: 300,
  food: 200,
  ore: 100,
  workers: 25,
};
const productionSettings = {
  wood: {
    hourlyProduction: oneHundredthOf(startingRessources.wood),
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: {
        value: oneHalfOf(startingRessources.wood),
        growth: defaultGrowt,
      },
      food: {
        value: 0,
        growth: zero,
      },
      ore: {
        value: oneHalfOf(startingRessources.ore),
        growth: laggingGrowt,
      },
    },
  },
  food: {
    hourlyProduction: oneHundredthOf(startingRessources.food),
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: {
        value: oneQuarterOf(startingRessources.wood),
        growth: defaultGrowt,
      },
      food: {
        value: oneThirdOf(startingRessources.food),
        growth: defaultGrowt,
      },
      ore: {
        value: oneQuarterOf(startingRessources.ore),
        growth: laggingGrowt,
      },
    },
  },
  ore: {
    hourlyProduction: oneHundredthOf(startingRessources.ore),
    upgradeTime: 100,
    upgradeWorkerCost: 5,
    upgradeCosts: {
      wood: {
        value: oneQuarterOf(startingRessources.wood),
        growth: defaultGrowt,
      },
      food: {
        value: 0,
        growth: zero,
      },
      ore: {
        value: oneQuarterOf(startingRessources.ore),
        growth: laggingGrowt,
      },
    },
  },
};

module.exports = { productionSettings, startingRessources };
