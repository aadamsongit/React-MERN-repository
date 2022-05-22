const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.getAllJokes);
  app.get("/api/jokes/:_id", JokeController.getOneSingleJoke);
  app.put("/api/jokes/update/:_id", JokeController.updateJoke);
  app.post("/api/jokes/create", JokeController.createJoke);
  app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
};
