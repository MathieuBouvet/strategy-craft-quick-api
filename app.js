const express = require("express");

const app = express();

app.use(express.json());

app.use("/hello/:name?", (req, res) => {
  const name = req.params.name ?? "World";
  res.status(200).json({
    msg: `Hello ${name} ;)`,
  });

app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.code);
    res.send(err);
  }
  res.status(500);
  res.send("Internal Server Error");
});

module.exports = app;
