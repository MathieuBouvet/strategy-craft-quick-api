function getBase(req, res) {
  const { id, owner, idleWorkers, wood, food, ore } = req.base.value();
  res.json({
    id,
    owner,
    idleWorkers,
    wood,
    food,
    ore,
  });
}

module.exports = { getBase };
