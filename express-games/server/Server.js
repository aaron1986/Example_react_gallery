//import express
const express = require("express");

//import cors
const cors = require("cors");

//run the config method
require("dotenv").config();

//tell server which port to run on
const PORT = 8080;

//instantiating our instance of express
const app = express();

//activate cors ** use brackets after cors
app.use(cors());

//import json data
const data = require("./games.json");

//end points
app.get("/", (request, response) => {
    response.json("You are looking at me root...");
});

//end points for games
app.get("/games", (request, response) => {
    const games = findGameByYear(request.query.year);
    response.json(games);
});


//
function findGameByYear(year) {
    return data.filter((game) => game.year == year || !year);
}

//start the server
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));

//