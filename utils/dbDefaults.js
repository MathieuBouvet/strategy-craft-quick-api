function createProduction() {
  return {
    workers: 0,
    level: 1,
    pendingUpgrade: null,
  };
}

function createBase(id, owner) {
  owner.bases.push(id);
  return {
    id,
    owner: owner.id,
    idleWorkers: 10,
    wood: 0,
    food: 0,
    ore: 0,
    productions: {
      wood: createProduction(),
      food: createProduction(),
      ore: createProduction(),
    },
  };
}

function createPlayer(id, name, mail, password) {
  return {
    id,
    name,
    mail,
    password,
    bases: [],
  };
}

module.exports = { createBase, createPlayer };
