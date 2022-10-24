const express = require("express");

const app = express();

app.listen(3333);

app.get("/", (request, response) => {
  // return response.send("Hello, Ignite!");
  return response.json({ message: "Hello, Ignite!" });
});
