const express = require("express");

const app = express();

app.listen("3000");

app.use(express.json());

app.route("/").get((req, res) => res.send(req.query.name));

app.route("/").post((req, res) => res.send(req.body));

app.route("/:param").get((req, res) => res.send(req.params.param));
