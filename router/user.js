const express = require('express');
const router = express.Router();

const user = require('../controllers/UserController');

// Register a new user
router.post('/', user.createUser);
// GET /users/:id

module.exports = router;