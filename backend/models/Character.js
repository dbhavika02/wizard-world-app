const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    name: String,
    house: String,
    wand: String,
    patronus: String,
    role: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Character", characterSchema);