const Pirates = require('../models/pirate.model');


module.exports.getAllPirates = (req, res) => {
    Pirates.find({})
        .then(allPirates => res.json({ pirates: allPirates }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.getSinglePirate = (req, res) => {
    Pirates.findOne({ _id: req.params.id })
        .then(SinglePirate => res.json({ pirate: SinglePirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.getRandomPirate = (req, res) => {
    Pirates.findRandom({ _id: req.params.id })
        .then(SinglePirate => res.json({ pirate: SinglePirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
 
module.exports.createPirate = (req, res) => {
    console.log(req.body)
    const {name, url, treasures, catchphrase, position, pegleg, eyepatch, hookhand } = req.body;
    Pirates.create({
        name,
        url,
        treasures,
        catchphrase,
        position,
        pegleg,
        eyepatch,
        hookhand
})
        .then(newlyCreatedPirate => res.json({ pirate: newlyCreatedPirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingPirate = (req, res) => {
    console.log(req.params, req.body)
    Pirates.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPirate => res.json({ pirates: updatedPirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingPirate = (req, res) => {
    Pirates.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}