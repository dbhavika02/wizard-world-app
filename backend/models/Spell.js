const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({
    name: String,
    type: String,
    effect: String,
    difficulty: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Spell", spellSchema);