import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "../../../../app";
import createConnection from "../../../../database";

let connection: Connection;

describe("Get balance controller", () => {
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

  it("should be able to get user balance", async () => {
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

    await request(app)
      .post("/api/v1/statements/deposit")
      .send({
        amount: 100.00,
        description: "PIX"
      })
      .set({
        Authorization: `Bearer ${token}`
      });

    const balance = await request(app).get("/api/v1/statements/balance").set({
      Authorization: `Bearer ${token}`
    });

    expect(balance.status).toBe(200);
    expect(balance.body.balance).toBe(100.00);
  });

  it("should not be able to get user balance when invalid token", async () => {
    const response = await request(app).get("/api/v1/statements/balance").set({
      Authorization: `Bearer invalid_token`
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toEqual("JWT invalid token!");
  });
});
