const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    res.send({global.foodItems})
  }
  catch (error) {
    console.error(error.massage);
    res.send()
  }
})