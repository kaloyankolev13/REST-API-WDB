const express = require('express');
const router = express.Router();

const user = require('../controllers/UserController');

// Register a new user
/**
 * @openapi
 * /users/register:
 *   post:
 *   tags: Tasks
 *     description: Creates a new user
 *     responses:
 *       200:
 *         description: User created
 */
router.post('/register', user.createUser);
// GET /users/:id
/**
 * @openapi
 * /users/login:
 *   post:
 *     description: Authorizes a user
 *     responses:
 *       200:
 *         description: Login succesfull
 */
router.post('/login', user.loginUser);

/**
 * @openapi
 * /users/logout:
 *   post:
 *     description: Logs out a user
 *     responses:
 *       200:
 *         description: Logout succesfull
 */
router.get('/logout', user.logoutUser);

module.exports = router;