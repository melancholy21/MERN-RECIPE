const express = require("express");
const { handleLogin, handleRegister } = require("../controllers/Auth");

const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);

module.exports = router;
