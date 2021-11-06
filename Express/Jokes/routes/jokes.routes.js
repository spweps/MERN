const JokesController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getSingleJoke);
    app.put('/api/jokes/:id', JokesController.updateExistingJoke);
    app.post('/api/jokes', JokesController.createJoke);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJoke);
}