const ProductManager = require("../models/productmanager.model");

module.exports.helloWorld = (req, res) => {
  res.json({ msg: "hello world" });
};

module.exports.findAllProducts = (req, res) => {
  ProductManager.find()
    .then((allProducts) => {
      res.json(allProducts);
    })
    .catch((err) => res.json({ err: err }));
};

module.exports.createProduct = (req, res) => {
  console.log(req.body);
  ProductManager.create(req.body)
    .then((newlyCreatedProduct) => res.json(newlyCreatedProduct))
    .catch((err) => res.json({ err: err }));
};

module.exports.findOneProduct = (req, res) => {
  console.log(req.body);
  ProductManager.findOne({ _id: req.params.id }).then((foundProduct) =>
    res.json({ results: foundProduct }).catch((err) => res.json({ err: err }))
  );
};

module.exports.updateOneProduct = (req, res) => {
  console.log(req.body);
  ProductManager.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json({ results: updatedProduct }))
    .catch((err) => res.json({ err: err }));
};

module.exports.deleteOneProduct = (req, res) => {
  console.log(req.body);
  ProductManager.deleteOne({ _id: req.params.id })
    // new: true,
    // runValidators: true,
    // })
    .then((deletedProduct) => res.json({ results: deletedProduct }))
    .catch((err) => res.json({ err: err }));
};

// module.exports.findRandomProduct = (req, res) => {
//   console.log(req.body);
//   ProductManager.find({ _id: req.params.id })
//     // new: true,
//     // runValidators: true,
//     // }}
//   function getRandomInt(max) {
//     return Math.floor(Math.random() = max);
//   }
//     .then((allProducts) => res.json({ results: allProducts }))
//     .catch((err) => res.json({ err: err }));

//   const randomIndex = getRandomInt()
// };
