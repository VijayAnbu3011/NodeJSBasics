const express = require("express");
const app = express();
require("./db");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const resRouter = require("./registerRouter");

app.use("/user", resRouter.regRoute);
app.use((err, req, res, next) => {
  res.status(500).json({
    error: true,
    message: err.message,
    data: null,
  });
});

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
