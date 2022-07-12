const express = require("express");

const app = express();

app.listen("3000");

//middleware -> ponte entre as reqs.
// quando mando algo do postman para ca, primeiro ele passa pelo middleware e dps executa
app.use(express.json());

app.route("/").post((req, res) => {
    console.log(req.body);
    res.send(req.body);
});
