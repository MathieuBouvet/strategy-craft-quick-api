const express = require("express");
const productionController = require("../controllers/production.controller");
const validateProduction = require("../middlewares/validateProduction");

const router = express.Router({ mergeParams: true });
const namedRessourceRouter = express.Router({ mergeParams: true });

namedRessourceRouter
  .use(validateProduction)
  .get("/", productionController.getProduction)
  .put("/upgrade", productionController.upgrade);

router.use("/:ressourceName", namedRessourceRouter);

module.exports = router;
