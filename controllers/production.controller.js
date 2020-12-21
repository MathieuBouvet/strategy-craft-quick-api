function getProduction(req, res) {
  const production = req.production.data.value();
  res.json({ name: req.production.name, ...production });
}

module.exports = { getProduction };
