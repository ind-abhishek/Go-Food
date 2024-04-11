const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoDb = require("./db");
mongoDb();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./Routes/createUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
