const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getSingleAuthor);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor)
}
