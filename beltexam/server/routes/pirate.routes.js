const PirateController = require('../controllers/pirate.controller');
module.exports = function(app){
    app.get('/api/', PirateController.getAllPirates);
    app.post('/api/pirates', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getSinglePirate);
    app.put('/api/pirates/:id', PirateController.updateExistingPirate);
    app.delete('/api/pirates/:id', PirateController.deleteAnExistingPirate)
}
