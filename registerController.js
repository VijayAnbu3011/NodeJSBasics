const regiterSchema = require("./registerModel");

let register = async (req, res, next) => {
  let { fname, lname, email, password } = req.body;
  try {
    let userData = await regiterSchema.findOne({ email });
    if (userData) {
      res.status(400).json({
        error: true,
        message: "User Mail Already Registered",
        data: null,
      });
    } else {
      await regiterSchema.insertMany([{ fname, lname, email, password }]);
      res.status(200).json({
        error: false,
        message: "Registered Succesfully",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
};
