const express = require("express");

const app = express();

app.listen("3000");

// middleware
app.use(express.json());

let author = "John";

app.route("/").put((req, res) => {
    author = req.body.author; // pegar apenas o conteudo e nao a estrutura json '{}'
    res.send(author);
});

app.route("/").get((req, res) => res.send(author));
