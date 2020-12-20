const db = require("./db.service");

const bases = db.get("bases");

function getBaseById(id) {
  return bases.find({ id });
}

module.exports = { getBaseById };
