const mongoose = require("mongoose");

const mongooseURL = "mongodb://127.0.0.1:27017/goFood";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongooseURL);
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db.collection("foodItems");
    const data = await fetchedData.find({}).toArray();
    console.log();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDb;
