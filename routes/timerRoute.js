const express = require("express");
const router = express.Router();
const timerController = require('../controllers/timerController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.post("/:user_id",jwtMiddleware.verifyToken,timerController.postTimer);
router.get('/:user_id/show',jwtMiddleware.verifyToken, timerController.showTimer);
router.get('/:user_id/show/avg',jwtMiddleware.verifyToken, timerController.avgTimer);

module.exports = router;
