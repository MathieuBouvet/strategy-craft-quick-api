const router = require("express").Router({ mergeParams: true });
const productionController = require("../controllers/production.controller");

router.get("/:ressourceName", productionController.getProduction);

module.exports = router;
