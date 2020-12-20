const db = require("./db.service");

const players = db.get("players");

function getPlayerById(id) {
  return players.find({ id });
}

module.exports = { getPlayerById };
