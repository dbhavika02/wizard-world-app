const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://dwivedibhavika40_db_user:RQylXN39ULIN8Mno@wizard-cluster.cx98rgz.mongodb.net/HarryPotterdb?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("CONNECTED");
    })
    .catch(err => {
        console.log(err);
    });