const playerService = require("../services/player.service");
const requireExistingPlayer = require("../utils/requireDbResult")("Player");

function getPlayer(req, res) {
  const playerId = parseInt(req.params.id);
  const player = requireExistingPlayer(playerService.getPlayerById(playerId));
  res.json(player);
}

module.exports = { getPlayer };
