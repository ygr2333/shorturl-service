const express = require("express");
const router = express.Router();
const controller = require("../controllers/shortController");

router.post("/", controller.createShort);
router.get("/:shortId", controller.redirect);

module.exports = router;
