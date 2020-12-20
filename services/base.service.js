const db = require("./db.service");
const HttpError = require("../utils/HttpErrors");
const requireDbResult = require("../utils/requireDbResult");

const bases = db.get("bases");

function getBaseById(id) {
  return bases.find({ id });
}

const requireBase = requireDbResult("Base");

module.exports = { getBaseById, requireBase };
