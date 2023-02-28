import { it, beforeAll, afterAll, describe, expect } from "vitest";
import { app } from "../src/app"; // importa o app mas sem o listen
import request from "supertest";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create create a new transaction", async () => {
    // supertest recebe um servidor node como param
    // const response = await request(app.server).post("/transactions").send({
    //   title: "New transaction",
    //   amount: 500,
    //   type: "credit",
    // });

    // expect(response.statusCode).toEqual(201);

    await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 500,
        type: "credit",
      })
      .expect(201);

    // console.log(response.headers);
    // console.log(response.get("Set-Cookie"));
  });

  // it.todo / it.only /it.skip
  it("should be able to list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 500,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    // console.log(listTransactionsResponse.body);
    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "New transaction",
        amount: 500,
      }),
    ]);
  });
});
