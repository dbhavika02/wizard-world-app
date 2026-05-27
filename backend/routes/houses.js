const express = require("express");

const router = express.Router();

const {
    getHouses,
    addHouse,
} = require("../controllers/houseController");

router.get("/", getHouses);

router.post("/", addHouse);

module.exports = router;