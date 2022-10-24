const express = require("express");

const app = express();

app.use(express.json()); // habilitar envio com json

app.listen(3333);

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query); // { page: '1', order: 'asc' }
  return response.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body); // { name: 'Course 6', lenghtInDays: 90 }
    return response.json(["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"]);
})

app.put("/courses/:id", (request, response) => {
    //const params = request.params;
    const { id } = request.params;
    console.log(id); // 1
    return response.json(["Course One", "Course 2", "Course 3", "Course 4", "Course 5"]);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Course One", "Course Two", "Course 3", "Course 4", "Course 5"]);
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Course One", "Course Two", "Course 3", "Course 4"]);
})
