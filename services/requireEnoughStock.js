const HttpError = require("../utils/HttpErrors");

function requireEnoughStock(enoughStockMapping, errorToThrow = 400) {
  const errorMessages = [];
  for (let [ressource, isEnough] of Object.entries(enoughStockMapping)) {
    if (!isEnough) {
      errorMessages.push(`Not enough ${ressource} to perform operation.`);
    }
  }
  if (errorMessages.length > 0) {
    throw new HttpError(errorToThrow, errorMessages.join(" "));
  }
}

module.exports = requireEnoughStock;
