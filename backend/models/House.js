const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    name: String,
    founder: String,
    animal: String,
    colors: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("House", houseSchema);