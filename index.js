require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("kunal@gmail.com ");
});

app.get("/login", (req, res) => {
  res.send("<h1>Neha hai</h1>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
