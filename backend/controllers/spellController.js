const Spell = require("../models/Spell");

const getSpells = async (req, res) => {
    try {
        const spells = await Spell.find();

        res.status(200).json(spells);
    } catch (err) {
        res.status(500).json({
            message: "Error fetching spells",
            error: err.message,
        });
    }
};

const addSpell = async (req, res) => {
    try {
        const spell = new Spell(req.body);

        const savedSpell = await spell.save();

        res.status(201).json(savedSpell);
    } catch (err) {
        res.status(500).json({
            message: "Error adding spell",
            error: err.message,
        });
    }
};

module.exports = {
    getSpells,
    addSpell,
};