const express = require('express');
const router = express.Router();

const user = require('../controllers/UserController');

// Register a new user
router.post('/register', user.createUser);
// GET /users/:id
router.post('/login', user.loginUser);

router.get('/logout', user.logoutUser);
module.exports = router;