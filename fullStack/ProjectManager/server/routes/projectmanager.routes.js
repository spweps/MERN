const ProjectManagerController = require('../controllers/projectmanager.controller');
module.exports = function(app){
    app.get('/api', ProjectManagerController.getAllProjects);
    app.post('/api/project', ProjectManagerController.createProject);
    app.get('/api/project', ProjectManagerController.getAllProjects);
    app.get('/api/project/:id', ProjectManagerController.getSingleProject);
    app.put('/api/project/:id', ProjectManagerController.updateExistingProject);
    app.delete('/api/project/:id', ProjectManagerController.deleteAnExistingProject)
}
