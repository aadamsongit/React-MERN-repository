const ProductsController = require("../controllers/productmanager.controller");
module.exports = function (app) {
  app.get("/api/product/:id", ProductsController.findOneProduct);
  app.get("/api/product", ProductsController.findAllProducts);

  app.get("/", ProductsController.helloWorld);

  app.post("/api/products", ProductsController.createProduct);
  app.put("/api/products/:id", ProductsController.updateOneProduct);
  app.delete("/api/products/delete/:id", ProductsController.deleteOneProduct);
  // app.get("/api/products/random", ProductsController.findRandomProduct);
};
