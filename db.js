const mongoose = require("mongoose");

module.exports.mongoConnect = mongoose
  .connect(
    "mongodb+srv://VijayK:4KHWFXqJmUiF9pzQ@cluster0.gnx7ui5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB not conneted");
    console.log(err);
  });
