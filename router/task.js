const express = require('express');
const router = express.Router();

const task = require('../controllers/TaskController');
const { isLoggedIn } = require('../utils/authMiddleware');


/**
 * @openapi
 * /tasks:
 *   get:
 *    tags: 
 *      -Tasks
 *     description: Gettings tasks
 *     responses:
 *       200:
 *         description: Returns tasks owned by the user
 */
router.get('/', task.getTasks),
/**
 * @openapi
 * /tasks:
 *   get:
 *     description: Gettings one task
 *     responses:
 *       200:
 *         description: Returns one task owned by the user
 */
router.get('/:id', task.getTask);
/**
 * @openapi
 * /tasks/:id:
 *   post:
 *     description: Creates a task
 *     responses:
 *       200:
 *         description: Task created
 */
router.post('/',task.createTask);
/**
 * @openapi
 * /tasks:
 *   put:
 *     description: Updates a task
 *     responses:
 *       200:
 *         description: task updated
 */
router.put('/:id', task.updateTask);
/**
 * @openapi
 * /tasks:
 *   delete:
 *     description: Deletes a task
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete('/:id', task.deleteTask);

module.exports = router;