const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const { application } = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const departments = [];
const employees = [];

function checksIfDepartmentExists(request, response, next) {
  const { id } = request.params;

  const department = departments.find(department => department.id === id);

  if (!department) {
    return response.status(404).json({ error: "Department not found." });
  }

  request.department = department;

  return next();
}

function checksIfDepartmentHasEmployees(request, response, next) {
  const { department } = request;

  if(department.employees.length > 0) {
    return response.status(400).json({ error: "You can delete a department with employees. "});
  }

  return next();
}

function checksIfEmployeeExists(request, response, next) {
  const { id } = request.params;

  const employee = employees.find(employee => employee.id === id);

  if (!employee) {
    return response.status(404).json({ error: "Employee not found. "});
  }

  request.employee = employee;

  return next();
}

app.post("/departments", (request, response) => {
  const { name } = request.body;

  const department = {
    id: uuid(),
    name,
    employees: [],
  }

  departments.push(department);

  return response.status(201).json(department);
});

app.get("/departments", (request, response) => {
  return response.json(departments);
});

app.delete("/departments/:id", checksIfDepartmentExists, checksIfDepartmentHasEmployees, (request, response) => {
  const { department } = request;

  departments.splice(department, 1);

  return response.status(204).send();
});

app.put("/departments/:id", checksIfDepartmentExists, (request, response) => {
  const { department } = request;
  const { name } = request.body;

  department.name = name;

  return response.json(department);
});

app.post("/departments/:id/employee", checksIfDepartmentExists, (request, response) => {
  const { department } = request;
  const { employeeId } = request.body;

  const emp = employees.find(employee => employee.id === employeeId);

  if (!emp) {
    return response.status(404).json({ error: "Employee not found." });
  }

  department.employees.push(emp);

  return response.status(201).json(department);
});

app.delete("/departments/:id/employee", checksIfDepartmentExists, (request, response) => {
  const { department } = request;
  const { employeeId } = request.body;

  const emp = employees.find(employee => employee.id === employeeId);

  if (!emp) {
    return response.status(404).json({ error: "Employee not found." });
  }

  department.employees.splice(emp, 1);

  return response.status(204).send();
});

app.post("/employees", (request, response) => {
  const { name, lastName, age, gender } = request.body;

  const employee = {
    id: uuid(),
    name,
    lastName,
    age,
    gender
  }

  employees.push(employee);

  return response.status(201).json(employee);
});

app.get("/employees", (request, response) => {
  return response.json(employees);
})

app.put("/employees/:id", checksIfEmployeeExists, (request, response) => {
  const { employee } = request;
  const { name, lastName, age, gender } = request.body;

  employee.name = name ?? employee.name;
  employee.lastName = lastName ?? employee.lastName;
  employee.age = age ?? employee.age;
  employee.gender = gender ?? employee.gender;

  return response.json(employee);
})

app.delete("/employees/:id", checksIfEmployeeExists, (request, response) => {
  const { employee } = request;

  employees.splice(employee, 1);

  return response.status(204).send();
})

app.listen(3333);
