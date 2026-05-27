const House = require("../models/House");

const getHouses = async (req, res) => {
    try {
        const houses = await House.find();

        res.status(200).json(houses);
    } catch (err) {
        res.status(500).json({
            message: "Error fetching houses",
            error: err.message,
        });
    }
};

const addHouse = async (req, res) => {
    try {
        const house = new House(req.body);

        const savedHouse = await house.save();

        res.status(201).json(savedHouse);
    } catch (err) {
        res.status(500).json({
            message: "Error adding house",
            error: err.message,
        });
    }
};

module.exports = {
    getHouses,
    addHouse,
};