const Projects = require('../models/projectmanager.model');


module.exports.getAllProjects = (req, res) => {
    Projects.find()
        .then(allProjects => res.json({ projects: allProjects }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.getSingleProject = (req, res) => {
    Projects.findOne({ _id: req.params.id })
        .then(SingleProject => res.json({ project: SingleProjects }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.getRandomProject = (req, res) => {
        Projects.findRandom({ _id: req.params.id })
            .then(SingleProject => res.json({ project: SingleProject }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
 
module.exports.createProject = (req, res) => {
    Projects.create(req.body)
        .then(newlyCreatedProject => res.json({ project: newlyCreatedProject }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingProject = (req, res) => {
    Projects.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProject => res.json({ projects: updatedProject }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingProject = (req, res) => {
    Projects.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}