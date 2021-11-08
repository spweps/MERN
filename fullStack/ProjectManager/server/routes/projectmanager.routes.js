const ProjectManagerController = require('../controllers/projectmanager.controller');
module.exports = function(app){
    app.get('/api', ProjectManagerController.index);
    app.post('/api/project', ProjectManagerController.createProject);
}
