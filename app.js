const express = require("express");

const app = express();

app.use(express.json());

app.use("/hello/:name?", (req, res) => {
  const name = req.params.name ?? "World";
  res.status(200).json({
    msg: `Hello ${name} ;)`,
  });
});

module.exports = app;
