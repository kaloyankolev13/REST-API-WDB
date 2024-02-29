const app = require('express');
const router = app.Router();

const project = require('../controllers/ProjectController');


router.get('/', project.getProjects);
// GET /projects/:id
// router.get('/:id', project.getProject);
// POST /projects
router.post('/',project.createProject);
// UPDATE /projects/:id
// router.put('/:id', project.updateProject);
// DELETE /projects/:id
// router.delete('/:id', project.deleteProject);

module.exports = router;