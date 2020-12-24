const db = require("./db.service");
const HttpError = require("../utils/HttpErrors");
const objectMap = require("../utils/objectMap");

const bases = db.get("bases");

function getBaseById(id) {
  return bases.find({ id });
}

function isThereEnoughRessources(base, ressourcesCosts) {
  const baseData = base.value();
  const checkCost = (cost, ressource) => baseData[ressource] >= cost;

  return objectMap(ressourcesCosts, checkCost);
}

function addToStock(base, amounts) {
  for (let [ressource, amount] of Object.entries(amounts)) {
    base.set(ressource, base.get(ressource) + amount).write();
  }
}

function removeFromStock(base, amounts) {
  addToStock(
    base,
    objectMap(amounts, amount => -amount)
  );
}

module.exports = {
  getBaseById,
  isThereEnoughRessources,
  addToStock,
  removeFromStock,
};
