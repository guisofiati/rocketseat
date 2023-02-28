import { it, beforeAll, afterAll, beforeEach, describe, expect } from "vitest";
import { app } from "../src/app"; // importa o app mas sem o listen
import { execSync } from "node:child_process"; // executar cmds no terminal pela aplicacao node
import request from "supertest";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  // necessario pois foi criado o test.db mas nao rodou as migrations
  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
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

  it("should be able to get a specific transaction", async () => {
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

    const transactionId = listTransactionsResponse.body.transactions[0].id;

    const getTransactionResponse = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set("Cookie", cookies)
      .expect(200);

    expect(getTransactionResponse.body.transaction).toEqual(
      expect.objectContaining({
        title: "New transaction",
        amount: 500,
      }),
    );
  });

  it("should be able to get summary", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "Credit transaction",
        amount: 5000,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    await request(app.server)
      .post("/transactions")
      .set("Cookie", cookies)
      .send({
        title: "Debit transaction",
        amount: 2000,
        type: "debit",
      });

    const summaryResponse = await request(app.server)
      .get("/transactions/summary")
      .set("Cookie", cookies)
      .expect(200);

    expect(summaryResponse.body.summary).toEqual({
      amount: 3000,
    });
  });
});
