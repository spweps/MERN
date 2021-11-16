const mongoose = require('mongoose');
 
const PetSchema = new mongoose.Schema(
    {
        name:
            {
                type: String,
                required: [true, "Name is required"],
                minlength: [3, "Name must be at least 3 characters"]
            },
        type:
            {
                type: String,
                required: [true, "Cat, dog, bird, etc"],
                minlength: [2, "No animals are under 2 characters"]
            },
        description:
            {
                type: String,
                required: [true, "Breed or species?"],
                min: [1, "If you don't have anything nice to say, don't say anything at all"]
            },
        skill_1:
            {
                type: String,
                required: [false], 
            },
        skill_2:
            {
                type: String,
                required: [false],

            },
        skill_3:
            {
                type: String,
                required: [false]
            },
        
    },
    { timestamps: true }
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;