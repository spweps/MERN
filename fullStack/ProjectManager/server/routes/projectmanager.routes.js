const ProjectManagerController = require('../controllers/projectmanager.controller');
module.exports = function(app){
    app.get('/api', ProjectManagerController.getAllProjects);
    app.post('/api/project', ProjectManagerController.createProject);
}
