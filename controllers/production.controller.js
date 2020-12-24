const { getRepresentation } = require("../services/production.service");

function getProduction(req, res) {
  res.json(getRepresentation(req.production));
}

module.exports = { getProduction };
