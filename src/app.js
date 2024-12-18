const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    
    await user.save();
    res.send("user created");
  } catch (error) {
    res.status(400).send("error saving the user");
  }
});

connectDB()
  .then(() => {
    console.log("db connected successfully");
    app.listen(3000, () => {
      console.log("server successsfu;;y started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
