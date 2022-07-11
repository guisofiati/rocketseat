const https = require("https");
const API = "https://jsonplaceholder.typicode.com/users";

// callback, espera conectar na api primeiro
https.get(API, (res) => {
  console.log(res.statusCode);
});

// executado primeiro, pois ha assincronismo e executa de forma independente
console.log("conectando api...");
