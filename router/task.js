const express = require('express');
const router = express.Router();

const task = require('../controllers/TaskController');

// GET /tasks
router.get('/', task.getTasks),
// GET /tasks/:id
router.get('/:id', task.getTask);
// POST /tasks
router.post('/', task.createTask);
// UPDATE /tasks/:id
router.put('/:id', task.updateTask);
// DELETE /tasks/:id
router.delete('/:id', task.deleteTask);

module.exports = router;