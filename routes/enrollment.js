const express = require('express');
const enrollmentController = require('../controllers/enrollment')

const router = express.Router();

router.post('/assign', enrollmentController.assign);

module.exports = router;