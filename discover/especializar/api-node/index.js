const axios = require("axios");
const express = require("express");

const app = express();

app.listen("3000");

app.route("/").get((req, res) => {
    axios
        .get("https://api.github.com/users/guisofiati")
        //.then((response) => res.send(response.data)) // all data
        //.then((response) => res.send(response.data.avatar_url)) // avatar url
        .then((response) =>
            res.send(`<img src="${response.data.avatar_url}"/>`)
        )
        .catch((error) => console.log(error));
});
