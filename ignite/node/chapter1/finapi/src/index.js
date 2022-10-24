const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.listen(3333);

app.use(express.json());

const customers = [];

// middlewares
function verifyIfExistsAccountWithInformedCPF(request, response, next) {
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
        return response.status(404).json({ error: "Customer not found." });
    }
    
    // para conseguir chamar o objeto na função que chama o middleware
    request.customer = customer; 
    
    return next();
}

// **********

function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if (operation.type === "credit") {
            return acc + operation.amount;
        }
        else {
            return acc - operation.amount;
        }
    }, 0);
    return balance;
}

app.post("/account", (request, response) => {
    const { name, cpf } = request.body;

    const isCustomerAlreadyExists = customers.some(customer => customer.cpf === cpf);
    
    if (isCustomerAlreadyExists) {
        return response.status(400).json({ "error": "Customer already exists." });
    }

    customers.push({
        id: uuidv4(),
        name,
        cpf,
        statements: []
    });

    return response.status(201).send();
});

// app.use(verifyIfExistsAccountWithInformedCPF);
// com o app.use(verifyIfExistsAccountWithInformedCPF) todas os endpoints abaixo dele
// usarao esse middlware, nao sendo necessario passar como parametro nas funcoes como passado abaixo

app.get("/statements", verifyIfExistsAccountWithInformedCPF, (request, response) => {
    const { customer } = request;

    return response.json(customer.statements);
});

app.post("/deposit", verifyIfExistsAccountWithInformedCPF, (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        type: "credit",
        created_at: new Date()
    };

    customer.statements.push(statementOperation);

    return response.status(201).send();
});

app.post("/withdraw", verifyIfExistsAccountWithInformedCPF, (request, response) => {
    const { amount } = request.body;

    const { customer } = request;

    const balance = getBalance(customer.statements);

    if (balance < amount) {
        return response.status(400).json({ error: "Insufficient funds." });
    }

    const statementOperation = {
        amount,
        type: "debit",
        created_at: new Date()
    };

    customer.statements.push(statementOperation);

    return response.status(201).send();
})