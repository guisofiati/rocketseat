import express from "express";

const app = express();

app.listen(3333);

app.get("/games", (req, res) => {
    return res.json([]);
});

app.post("/ads", (req, res) => {
    // const adId = req.params.adId;
    //res.location("/ads" + )
    return res.status(201).json([]);
});

app.get("/games/:id/ads", (req, res) => {
    // listar ads POR jogo

    //const gameId = req.params.id;

    return res.json([
        { id: 1, name: "Anuncio 1" },
        { id: 2, name: "Anuncio 2" },
        { id: 3, name: "Anuncio 3" },
        { id: 4, name: "Anuncio 4" },
        { id: 5, name: "Anuncio 5" },
    ]);
});

app.get("/ads/:id/discord", (req, res) => {
    //const adId = req.params.id;

    return res.json([]);
});
