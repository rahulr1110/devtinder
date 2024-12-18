const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.cqhwonq.mongodb.net/devTinder"
  );
};


module.exports = connectDB


