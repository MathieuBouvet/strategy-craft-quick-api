function getProduction(req, res) {
  const production = req.production.value();
  const productionData = { name: req.params.ressourceName, ...production };
  res.json(productionData);
}

module.exports = { getProduction };
