const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");
const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
