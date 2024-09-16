const express = require('express');
const userController = require('../controllers/user')
const userService = require('../services/user');

const router = express.Router();

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/find', userService.getUserByEmail);

router.delete('/delete-account/:id', userController.deleteUser);
router.get('/:id', userController.getUserById);

module.exports = router;