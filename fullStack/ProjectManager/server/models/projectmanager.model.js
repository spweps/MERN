const mongoose = require('mongoose');
 
const ProgramManagerSchema = new mongoose.Schema({
    {
    setup:{
    type: String,
    required: [true, "Setup is required"],
    minlength: [8, "Setup must be at least 8 characters"]
    },
    punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [12, "Punchline must be 12 characters"]
    }},
    { timestamps: true }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;