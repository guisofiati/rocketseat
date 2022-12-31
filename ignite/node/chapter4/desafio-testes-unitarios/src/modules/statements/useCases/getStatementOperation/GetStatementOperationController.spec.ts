import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "../../../../app";
import createConnection from "../../../../database";

let connection: Connection;

describe("Get statement operation controller", () => {
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

  it("should be able to get statement operation by user", async () => {
    await request(app).post("/api/v1/users").send({
      name: "User test",
      email: "test@example.com",
      password: "123"
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

      const { id } = statement.body;

    const statement_operation = await request(app).get(`/api/v1/statements/${id}`).set({
      Authorization: `Bearer ${token}`
    });

    expect(statement_operation.body).toHaveProperty("id");
    expect(statement_operation.status).toBe(200);
  });

  it("should not be able to get statement operation by user when statement does not exists", async () => {
    const auth = await request(app).post("/api/v1/sessions").send({
      email: "test@example.com",
      password: "123",
    });

    const { token } = auth.body;

    const fake_statement_id = uuid();

    const statement = await request(app).get(`/api/v1/statements/${fake_statement_id}`).set({
      Authorization: `Bearer ${token}`
    });

    expect(statement.status).toBe(404);
    expect(statement.body.message).toEqual("Statement not found");
  });

  it("should not be able to get statement operation by user when statement id is not an uuid", async () => {
    const auth = await request(app).post("/api/v1/sessions").send({
      email: "test@example.com",
      password: "123",
    });

    const { token } = auth.body;

    const statement = await request(app).get("/api/v1/statements/statement_unknown").set({
      Authorization: `Bearer ${token}`
    });

    expect(statement.status).toBe(500);
  });

  it("should not be able to get statement operation by user when invalid token", async () => {
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

    const { id } = statement.body;

    const response = await request(app).get(`/api/v1/statements/${id}`).set({
      Authorization: `Bearer invalid_token`
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toEqual("JWT invalid token!");
  });
});
