const express = require('express');
const app = express()

app.set("view engine", "ejs"); // ferramenta para renderizar html sera ejs

// tem que estar dentro de uma pasta 'views' 
app.get("/", function(req, res) {
    res.render("pages/index"); 
});

app.get("/about", function(req, res) {
    res.render("pages/about");
});

app.listen(8080);

const interval = 10000;
setInterval(() => console.log('listening server'), interval);