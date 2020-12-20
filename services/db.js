const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./data/db.json");
const db = lowdb(adapter);

db.defaults({ bases: [], players: [] }).write();

module.exports = db;
