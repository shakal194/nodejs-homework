const mongoose = require("mongoose");
const { DB_HOST, PORT } = require("./helpers");
const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
