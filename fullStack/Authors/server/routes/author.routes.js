const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.getAllAuthors);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getSingleAuthor);
    app.put('/api/author/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor)
}
