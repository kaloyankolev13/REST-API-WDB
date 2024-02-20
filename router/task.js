const express = require('express');
const router = express.Router();

const task = require('../controllers/TaskController');
const { isLoggedIn } = require('../utils/authMiddleware');

router.get('/',isLoggedIn, task.getTasks),
// GET /tasks/:id
router.get('/:id', task.getTask);
// POST /tasks
router.post('/', isLoggedIn,task.createTask);
// UPDATE /tasks/:id
router.put('/:id', task.updateTask);
// DELETE /tasks/:id
router.delete('/:id', task.deleteTask);

module.exports = router;