const express = require("express");
const router = express.Router();
const timerController = require('../controllers/timerController');

router
    .route("/timer")
        .post(timerController.postTimer);

module.exports = router;
