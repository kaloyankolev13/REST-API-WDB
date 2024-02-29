const Project = require('../models/Project');

module.exports.getProjects = (req, res) => {
    Project.find()
        .populate('tasks')
        .exec((err, projects) => {
            if (err) {
                return res.status(500).send(err);
            }

})
}

module.exports.createProject = async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        completed: req.body.completed,
        createdBy: req.body.user
    });

    await project.save();
        res.json(project);
}
