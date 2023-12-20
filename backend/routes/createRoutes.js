const express = require("express");
const { Check, Fetch, Label } = require("../controllers/createController.js");
// const { Upload } = require('../controllers/imageController.js')

const router = express.Router();

router.post("/check", Check);
router.post("/fetch", Fetch);
router.post("/label", Label);

module.exports = router;
