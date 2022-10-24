const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.listen(3333);

// middlewares
app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
    const { name, cpf } = request.body;

    const isCustomerAlreadyExists = customers.some(customer => customer.cpf === cpf);
    
    if (isCustomerAlreadyExists) {
        return response.status(400).json({ "message": "Customer already exists!" });
    }

    customers.push({
        id: uuidv4(),
        name,
        cpf,
        statements: []
    });

    return response.status(201).send();
});