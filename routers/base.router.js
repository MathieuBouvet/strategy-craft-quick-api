const router = require("express").Router();
const baseController = require("../controllers/base.controller");

router.get("/:id", baseController.getBase);

module.exports = router;
