const bcrypt = require("bcrypt");
const Users = require("../models/UserModel");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(500).json({
        success: false,
        error: "User doesn't exist!",
      });
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      return res.status(500).json({
        success: false,
        error: "Password doesn't match!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User authenticated!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to login.",
    });
  }
};

const handleRegister = async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(500).json({
        success: false,
        error: "Email already registered!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new Users({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });

    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "User registered successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to register account!",
    });
  }
};

module.exports = {
  handleLogin,
  handleRegister,
};
