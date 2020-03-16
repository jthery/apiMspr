// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const AuthController = require('../controllers/auth.controller.js');

/**
 * @swagger
 *
 * /api/login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: pwd
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login has been established successfully
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 *
 * /api/register:
 *   post:
 *     description: Register to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nom
 *         description: user's name.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: prenom
 *         description: user's firstname.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: Email to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: pwd
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: register has been created successfully
 */
router.post('/register', AuthController.register);

// Export routes
module.exports = router;