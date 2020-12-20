const router = require("express").Router();
const playerController = require("../controllers/player.controller");

router.get("/:id", playerController.getPlayer);

module.exports = router;
