const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log(global.foodItems);
    console.log(global.foodCategory);
    res.send({
      foodItems: global.foodItems,
      foodCategory: global.foodCategory,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send();
  }
});

module.exports = router;
