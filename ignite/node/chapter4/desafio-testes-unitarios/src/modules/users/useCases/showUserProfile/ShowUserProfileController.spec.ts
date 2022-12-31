import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "../../../../app";
import createConnection from "../../../../database";

let connection: Connection;

describe("Show user profile controller", () => {
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

  it("should be able to show user profile", async () => {
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

    const response = await request(app).get("/api/v1/profile").set({
      Authorization: `Bearer ${token}`
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
  });

  it("should not be able to show user profile when invalid token", async () => {
    const response = await request(app).get("/api/v1/profile").set({
      Authorization: `Bearer invalid_token`
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toEqual("JWT invalid token!");
  });
});
