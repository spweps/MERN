const mongoose = require('mongoose');
 
const ProjectSchema = new mongoose.Schema(
    {
    
        title:
            {
                type: String,
                required: [true, "Title is required"],
                minlength: [8, "Setup must be at least 8 characters"]
            },
        price: 
            {
                type: String,
                required: [true, "Price is required"],
                minlength: [1, "Price must be greater than 0"]
            },
        description: 
            {
                type: String,
                required: [true, "Description is required"],
                minlength: [12, "Description must be 12 characters or more"]
            }
    },
    { timestamps: true }
);

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;