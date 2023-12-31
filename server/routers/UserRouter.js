const express = require("express");
const { handleLogin, handleRegister } = require("../controllers/Auth");
const { getData } = require("../controllers/UserController");

const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.get("/userdata", getData);

module.exports = router;
