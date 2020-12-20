const express = require("express");
const baseController = require("../controllers/base.controller");
const validateBase = require("../middlewares/validateBase");
const productionRouter = require("../routers/production.router");

const router = express.Router({ mergeParams: true });
const idedBaseRouter = express.Router({ mergeParams: true });

idedBaseRouter
  .use(validateBase)
  .get("/", baseController.getBase)
  .use("/productions", productionRouter);

router.use("/:baseId", idedBaseRouter);

module.exports = router;
