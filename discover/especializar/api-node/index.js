const express = require("express");

const app = express();

app.listen("3000");

app.use(express.json());

// aceita body: post, put, e patch
app.route("/").post((req, res) => {
    //console.log(req.body);
    //res.send(req.body); -> tudo
    //res.send(req.body.telefone);
    //res.send(req.statusCode);
    const { nome, telefone } = req.body; // desmembrando
    res.send(`Nome: ${nome} telefones: ${telefone}`);
});
