const router = require("express").Router();
const baseController = require("../controllers/base.controller");
const productionRouter = require("../routers/production.router");

router.get("/:id", baseController.getBase);
router.use("/:baseId/productions", productionRouter);

module.exports = router;
