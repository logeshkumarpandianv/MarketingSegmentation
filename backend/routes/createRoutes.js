const express = require("express");
const { Check, Fetch } = require("../controllers/createController.js");
// const { Upload } = require('../controllers/imageController.js')

const router = express.Router();

router.post("/check", Check);
router.post("/fetch", Fetch);

module.exports = router;
