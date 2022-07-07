const express = require("express");
const app = express();

app.set("view engine", "ejs"); // ferramenta para renderizar html sera ejs

// tem que estar dentro de uma pasta 'views'
app.get("/", function (req, res) {
  const items = [
    {
      id: 1,
      message: "Bom dia, otima pagina!",
    },
    {
      id: 2,
      message: "Estou aprendendo muito, obrigado.",
    },
    {
      id: 3,
      message: "Gostei :D",
    },
    {
      id: 4,
      message: "Tenho uma critica...",
    },
  ];

  const subtitle = 'O EJS é uma linguagem de modelagem e criação de página HTML usando JS'
  res.render("pages/index", {
    messages: items,
    subtitle: subtitle
  });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);

const interval = 10000;
setInterval(() => console.log("listening server"), interval);
