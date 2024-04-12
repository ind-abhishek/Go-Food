const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const jwtSecret = "AbhishekJKiJAiHo";
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
    body("name").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      await User.create({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const email = req.body.email;
    const errors = validationResult(req);
    try {
      const userData = await User.findOne({ email }); // Find user by email

      if (!userData) {
        return res.status(400).json({ errors: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!isPasswordValid) {
        return res.status(400).json({ errors: "Invalid email or password" });
      }

      const data = {
        user: {
          d: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
