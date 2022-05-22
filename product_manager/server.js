const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/productmanager.config");

require("./server/routes/productmanager.routes")(app); // This is new

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
