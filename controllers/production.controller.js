function getProduction(req, res) {
  const production = req.production.data.value();
  const productionData = { name: req.production.name, ...production };
  res.json(productionData);
}

module.exports = { getProduction };
