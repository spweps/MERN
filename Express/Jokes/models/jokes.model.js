const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
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
    }}
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;