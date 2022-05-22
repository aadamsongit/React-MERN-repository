const { Jokes } = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
  Jokes.find()
    .then((allJokes) => {
      res.json({ results: allJokes });
    })
    .catch((err) => res.json({ err: err }));
};

module.exports.getOneSingleJoke = (req, res) => {
  Jokes.findOne({ _id: req.params._id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
    .catch((error) =>
      res.json({ message: "Something went wrong", error: error })
    );
};

module.exports.createJoke = (req, res) => {
  Jokes.create(req.body)
    .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
    .catch((error) =>
      res.json({ message: "Something went wrong", error: error })
    );
};

module.exports.updateJoke = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((error) =>
      res.json({ message: "Something went wrong", error: error })
    );
};

module.exports.deleteJoke = (req, res) => {
  Jokes.deleteOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((error) =>
      res.json({ message: "Something went wrong", error: error })
    );
};
