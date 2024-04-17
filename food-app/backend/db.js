const mongoose = require("mongoose");

const mongooseURL = "mongodb://127.0.0.1:27017/goFood";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongooseURL);

    const fetchedData = await mongoose.connection.db.collection("foodItems");
    const data = await fetchedData.find({}).toArray();
    global.foodItems = data;

    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const CatData = await foodCategory.find({}).toArray();
    global.foodCategory = CatData;
  } catch (err) {
    global.foodItems = [];
    global.foodCategory = [];
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDb;
