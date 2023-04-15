const express = require("express");
const router = express.Router();
const { Toy } = require("../persistence");

router.get("/", async (req, res) => {
  try {
    const toys = await Toy.find({});
    res.send(toys);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Get toy with id" + id);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Update toy by id" + id);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Delete toy with id" + id);
});

module.exports = router;