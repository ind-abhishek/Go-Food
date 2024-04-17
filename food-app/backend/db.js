const mongoose = require("mongoose");

const mongooseURL = "mongodb://127.0.0.1:27017/goFood";

const mongoDb = async () => {
  let foodItems;
  try {
    await mongoose.connect(mongooseURL);
    const fetchedData = await mongoose.connection.db.collection("foodItems");
    foodItems = await fetchedData.find({}).toArray();
    // console.log(foodItems);
  } catch (err) {
    console.error("Error fetching data from MongoDB:", err);
  }
  return foodItems;
};

module.exports = mongoDb;
