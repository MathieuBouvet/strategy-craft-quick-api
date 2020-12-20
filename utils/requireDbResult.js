const HttpError = require("./HttpErrors");

function nonNullChecker(name) {
  return data => {
    if (data.value() == null) {
      throw new HttpError(404, `${name} not found`);
    }
    return data;
  };
}

module.exports = nonNullChecker;
