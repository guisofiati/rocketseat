import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "../../../../app";
import createConnection from "../../../../database";

let connection: Connection;

describe("Create user controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO users(id, name, email, password, created_at, updated_at)
      VALUES ('${id}', 'fulano', 'fulano@gmail.com', '${password}', now(), now())`
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to deposit", async () => {
    await request(app).post("/api/v1/users").send({
      name: "User test",
      email: "test@example.com",
      password: "123",
    });

    const auth = await request(app).post("/api/v1/sessions").send({
      email: "test@example.com",
      password: "123",
    });

    const { token } = auth.body;

    const statement = await request(app)
    .post("/api/v1/statements/deposit")
    .send({
      amount: 100.00,
      description: "PIX"
    })
    .set({
      Authorization: `Bearer ${token}`
    });

    expect(statement.status).toBe(201);
    expect(statement.body).toHaveProperty("id");
    expect(statement.body.type).toBe("deposit");
  });

  it("should be able to withdraw when sufficient balance", async () => {
    const auth = await request(app).post("/api/v1/sessions").send({
      email: "test@example.com",
      password: "123",
    });

    const { token } = auth.body;

    const statement = await request(app)
    .post("/api/v1/statements/withdraw")
    .send({
      amount: 99.00,
      description: "Withdraw to pay the bills"
    })
    .set({
      Authorization: `Bearer ${token}`
    });

    expect(statement.status).toBe(201);
  });

  it("should not be able to withdraw when insufficient balance", async () => {
    const auth = await request(app).post("/api/v1/sessions").send({
      email: "test@example.com",
      password: "123",
    });

    const { token } = auth.body;

    const statement = await request(app)
    .post("/api/v1/statements/withdraw")
    .send({
      amount: 2.00,
      description: "Withdraw to pay the bills"
    })
    .set({
      Authorization: `Bearer ${token}`
    });

    expect(statement.status).toBe(400);
    expect(statement.body.message).toEqual("Insufficient funds");
  });

  it("should not be able to create a statement when invalid token", async () => {
    const response = await request(app).get("/api/v1/profile").set({
      Authorization: `Bearer invalid_token`
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toEqual("JWT invalid token!");
  });
});
