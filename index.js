require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

let users = [{ username: "Jie", password: "kkkkkk" }];

server.get("/", (req, res) => {
  res.send("Hello Jie");
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

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
