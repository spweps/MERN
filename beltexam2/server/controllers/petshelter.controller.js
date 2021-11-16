const Pets = require('../models/petshelter.model');


module.exports.getAllPets = (req, res) => {
    Pets.find({})
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.getSinglePet = (req, res) => {
    Pets.findOne({ _id: req.params.id })
        .then(SinglePet => res.json({ pet: SinglePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.getRandomPet = (req, res) => {
    Pets.findRandom({ _id: req.params.id })
        .then(SinglePet => res.json({ pet: SinglePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
 
module.exports.createPet = (req, res) => {
    console.log(req.body)
    const {name, type, description, skill_1, skill_2, skill_3 } = req.body;
    Pets.create({
        name,
        type,
        description,
        skill_1,
        skill_2,
        skill_3
})
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.status(400).json(err))
}
 
module.exports.updateExistingPet = (req, res) => {
    console.log(req.params, req.body)
    Pets.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ pets: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingPet = (req, res) => {
    Pets.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}