const express = require("express");
const app = express();

app.use("/text", (req, res) => {
  res.send("hii text");
});

app.listen(3000, () => {
  console.log("server successsfu;;y started");
});
