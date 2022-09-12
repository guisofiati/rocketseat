// const express = require("express"); -> type: commonjs

import express from "express"; // -> type: module .mjs

const app = express();

app.listen(3333);

app.get("/ads", (req, res) => {
    return res.json([
        { id: 1, name: "Anuncio 1" },
        { id: 2, name: "Anuncio 2" },
        { id: 3, name: "Anuncio 3" },
        { id: 4, name: "Anuncio 4" },
        { id: 5, name: "Anuncio 5" },
    ]);
});
