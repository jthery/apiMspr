// Express router
var express = require('express');
var router = express.Router();

// Controller declaration
const AuthController = require('../controllers/auth.controller.js');

//LOGIN : Crud method, route and controller function 
router.post('/login', AuthController.login);

//REGISTER : Crud method, route and controller function 
router.post('/register', AuthController.register);

// Export routes
module.exports = router;