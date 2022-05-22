const mongoose = require("mongoose");

const db_name = "product_manager_db";

mongoose
  .connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Found db");
  })
  .catch((err) => {
    console.log("Lost: ", err);
  });
