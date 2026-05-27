const Character = require("../models/Character");

const getCharacters = async (req, res) => {
    try {
        const characters = await Character.find();

        res.status(200).json(characters);
    } catch (err) {
        res.status(500).json({
            message: "Error fetching characters",
            error: err.message,
        });
    }
};

const addCharacter = async (req, res) => {
    try {
        const character = new Character(req.body);

        const savedCharacter = await character.save();

        res.status(201).json(savedCharacter);
    } catch (err) {
        res.status(500).json({
            message: "Error adding character",
            error: err.message,
        });
    }
};

module.exports = {
    getCharacters,
    addCharacter,
};