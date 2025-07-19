const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");
const { auth } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.json({ message: "User route is working!" });
});

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, getProfile);

module.exports = router;
