const express = require("express");
const router = express.Router();
const userController = require('../controllers/timerController');

router
    .route(":_id/timer")
        .post(userController.userRegister);



module.exports = router;