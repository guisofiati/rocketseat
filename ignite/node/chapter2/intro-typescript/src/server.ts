// const express = require("express"); -> typescript usa o esm ao invez do commonjs

import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello, world!" });
});

app.listen(3333);
