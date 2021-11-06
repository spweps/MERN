const Jokes = require('../models/jokes.model;


module.exports.getAllJokes = (req, res) => {
    Jokes.find()
        .then(allDaJokes => res.json({ jokes: allDaJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.getSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(SingleJoke => res.json({ jokes: SingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => res.json({ jokes: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ jokes: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}')