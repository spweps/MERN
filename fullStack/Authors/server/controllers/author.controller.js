const Authors = require('../models/author.model');


module.exports.getAllAuthors = (req, res) => {
    Authors.find({})
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.getSingleAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id })
        .then(SingleAuthor => res.json({ author: SingleAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.getRandomAuthor = (req, res) => {
        Authors.findRandom({ _id: req.params.id })
            .then(SingleAuthor => res.json({ author: SingleAuthor }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
 
module.exports.createAuthor = (req, res) => {
    console.log(req.body)
    Authors.create(req.body)
        .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingAuthor = (req, res) => {
    console.log(req.params, req.body)
    Authors.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ authors: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}