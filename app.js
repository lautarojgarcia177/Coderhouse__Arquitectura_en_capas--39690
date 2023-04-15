const express = require("express");
const app = express();
const mongoose = require("mongoose");
const toysRouter = require("./routes/toys.router");
require("./persistence");

app.use("/toys", toysRouter);

app.get("/user", (req, res) => {
  res.send("Get all users");
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send("Get user with id" + id);
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send("Update user by id" + id);
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send("Delete user with id" + id);
});

const port = 8080;
app.listen(port, () => console.log(`Servidor escuchando en el puerto 8080`));
