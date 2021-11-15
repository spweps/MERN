const mongoose = require('mongoose');
 
const PirateSchema = new mongoose.Schema(
    {
        name:
            {
                type: String,
                required: [true, "Name is required"],
                minlength: [3, "Name must be at least 3 characters"]
            },
        url:
            {
                type: String,
                required: [true, "Proof is required"],
            },
        treasures:
            {
                type: Number,
                required: [true, "All good pirates have treasure chests"],
                min: [1, "What, you don't have a chest yet? Go find one."]
            },
        catchphrase:
            {
                type: String,
                required: [true, "What strikes fear into the heart of sailors?"],
                minlength: [8,"A word doesn't count as a phrase, scalleywag."]
            },
        position:
            {
                type: String,
                required: [true, "If ye ain't part of a crew, ye ain't a pirate"],
            },
        pegleg:
            {
                type: Boolean,
                required: [true]
            },
        eyepatch:
            {
                type: Boolean,
                required: [true]
            },
        hookhand:
            {
                type: Boolean,
                required: [true]
            }
    },
    { timestamps: true }
);

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;