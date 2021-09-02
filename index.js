require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

let users = [{ username: "Jie", password: "kkkkkk" }];

server.get("/", (req, res) => {
  res.send("Hello There, welcome to the app");
});

server.get("/api/users", (req, res) => {
  res.send(users);
});

server.post("/api/register", (req, res) => {
  users.push(req.body);
  res.send(req.body);
});

server.post("/api/login", (req, res) => {
  res.send(`welcome back`);
});

//eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
