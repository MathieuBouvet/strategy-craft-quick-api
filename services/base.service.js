const db = require("./db.service");
const HttpError = require("../utils/HttpErrors");

const bases = db.get("bases");

function getBaseById(id) {
  return bases.find({ id });
}

module.exports = { getBaseById };
