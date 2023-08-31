const express = require("express");
const regRoute = express.Router();
const regController = require("./registerController");

regRoute.post("/registerUser", regController.register);

module.exports = {
  regRoute,
};
