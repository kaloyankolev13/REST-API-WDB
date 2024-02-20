const Task = require('../models/Task');

// GET /tasks
module.exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    console.log(req.session);
    res.json(tasks);
}

// GET /tasks/:id

module.exports.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('The task with the given ID was not found');
    res.json(task);
}

module.exports.createTask = async (req, res) => { const task = new Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        completed: req.body.completed,
        createdBy: req.session.user
    });

    await task.save();
    res.json(task);
};

module.exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        completed: req.body.completed
    }, { new: true });

    if (!task) return res.status(404).send('The task with the given ID was not found');
    res.json(task);
}

module.exports.deleteTask = async (req, res) => {
    const task = await Task.findByIdAndRemove(req.params.id);
    if (!task) return res.status(404).send('The task with the given ID was not found');
    res.json(task);
}