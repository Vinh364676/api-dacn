const express = require("express");
const router = express.Router();
const bitcoinController = require("../controller/bitcoinController");


// Định nghĩa các tuyến điều hướng
router.post("/", bitcoinController.postBitcoin);
router.get("/", bitcoinController.getBitcoin);
module.exports = router;