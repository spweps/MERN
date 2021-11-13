const Authors = require('../models/villain.model');


module.exports.getAllVillains = (req, res) => {
    Villains.find({})
        .then(allVillains => res.json({ villains: allVillains }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.getSingleVillain = (req, res) => {
    Villains.findOne({ _id: req.params.id })
        .then(SingleVillain => res.json({ villain: SingleVillain }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.getRandomVillain = (req, res) => {
        Villains.findRandom({ _id: req.params.id })
            .then(SingleVillain => res.json({ villain: SingleVillain }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
 
module.exports.createVillian = (req, res) => {
    console.log(req.body)
    Villains.create(req.body)
        .then(newlyCreatedVillain => res.json({ villain: newlyCreatedVillain }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingVillain = (req, res) => {
    console.log(req.params, req.body)
    Villains.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedVillian => res.json({ villains: updatedVillain }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingVillain = (req, res) => {
    Villains.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}