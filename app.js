const express = require("express");
const HttpError = require("./utils/HttpErrors");
const playerRouter = require("./routers/player.router");
const baseRouter = require("./routers/base.router");

const app = express();

app.use(express.json());

app.use("/hello/:name?", (req, res) => {
  const name = req.params.name ?? "World";
  res.status(200).json({
    msg: `Hello ${name} ;)`,
  });
});

app.use("/players", playerRouter);
app.use("/bases", baseRouter);

app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.code);
    res.json({ ...err, message: err.message });
  } else {
    console.log(err);
    res.status(500);
    res.send("Internal Server Error : " + err);
  }
});

module.exports = app;
