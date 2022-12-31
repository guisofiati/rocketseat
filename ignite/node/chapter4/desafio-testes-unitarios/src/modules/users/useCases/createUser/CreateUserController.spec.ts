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

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/api/v1/users").send({
      name: "User test",
      email: "test@example.com",
      password: "123",
    });

    expect(response.status).toBe(201);
  });

  it("should not be able to create a new user when user already exists", async () => {
    await request(app).post("/api/v1/users").send({
      name: "User test",
      email: "test@example.com",
      password: "123",
    });

    const response = await request(app).post("/api/v1/users").send({
      name: "User test",
      email: "test@example.com",
      password: "123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual("User already exists");
  });
});
