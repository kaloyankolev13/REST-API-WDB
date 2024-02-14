const express = require('express');
const router = express.Router();

const Task = require('../models/task');


// GET /tasks

router.get('/', async (req, res) => {
    // const tasks = await Task.find();
    res.json('hello');
}
);

module.exports = router;