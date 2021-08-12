"use strict";

const express = require("express");
const { initDb } = require("./db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./route"));

const _Port = 3000;

initDb((err) => {
  if (err) throw err;

  app.listen(_Port, (errServer) => {
    if (errServer) throw errServer;

    console.log(`Server running on port ${_Port}`);
  });
});
