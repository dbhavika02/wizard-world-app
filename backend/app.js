require("dotenv").config();

var express = require("express");
var cors = require("cors");

require("./collections");

const charactersRouter = require("./routes/characters");
const spellsRouter = require("./routes/spells");
const housesRouter = require("./routes/houses");

var app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Wizard World API Running");
});

app.use("/api/characters", charactersRouter);
app.use("/api/spells", spellsRouter);
app.use("/api/houses", housesRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});