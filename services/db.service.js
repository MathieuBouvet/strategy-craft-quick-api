const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { createBase, createPlayer } = require("../utils/dbDefaults");

const adapter = new FileSync("./data/db.json");
const db = lowdb(adapter);

const player1 = createPlayer(
  0,
  "player-one",
  "player-one@test.com",
  "password"
);
const base1 = createBase(0, player1);

const player2 = createPlayer(
  1,
  "player-two",
  "player-two@test.com",
  "passwordForPlayer2"
);

const base2 = createBase(1, player2);
const base3 = createBase(2, player2);

db.defaults({
  bases: [base1, base2, base3],
  players: [player1, player2],
}).write();

module.exports = db;
