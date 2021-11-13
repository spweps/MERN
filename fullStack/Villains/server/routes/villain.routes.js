const VillainController = require('../controllers/villain.controller');
module.exports = function(app){
    app.get('/api/', VillainController.getAllVillains);
    app.post('/api/villains', VillainController.createVillain);
    app.get('/api/villains', VillainController.getAllVillains);
    app.get('/api/villains/:id', VillainController.getSingleVillain);
    app.put('/api/villains/:id', VillainController.updateExistingVillain);
    app.delete('/api/villains/:id', VillainController.deleteAnExistingVillain)
}
