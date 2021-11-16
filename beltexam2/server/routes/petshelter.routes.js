const PetController = require('../controllers/petshelter.controller');
module.exports = function(app){
    app.get('/api/', PetController.getAllPets);
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getSinglePet);
    app.put('/api/pets/:id', PetController.updateExistingPet);
    app.delete('/api/pets/:id', PetController.deleteAnExistingPet)
}
