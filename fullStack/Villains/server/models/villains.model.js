const mongoose = require('mongoose');
 
const VillainSchema = new mongoose.Schema(
    {
    
        name:
            {
                type: String,
                required: [true, "Name is required"],
                minlength: [3, "Name must be at least 3 characters"]
            },
        locale:
            {
                type: String,
                required: [true, "Villains must have universes"],
                minlength: [2, "Must be at least 2 characters"]
            },
        accomplishments:
            {
                type: String,
                required: [true, "Villains gotta get their gangsta on otherwise they're not villains...like wtf"],
                minlength: [20, "Like I said, villains gotta get their gangsta on"]
            }
    },
    { timestamps: true }
);

const Villain = mongoose.model('Villain', VillainSchema);

module.exports = Villain;