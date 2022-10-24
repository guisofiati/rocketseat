const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.listen(3333);

// middlewares
app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
    const { name, cpf } = request.body;

    const id = uuidv4();

    customers.push({
        id,
        name,
        cpf,
        statements: []
    });

    return response.status(201).send();
});