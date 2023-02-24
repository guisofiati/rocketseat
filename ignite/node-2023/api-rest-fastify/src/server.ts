import fastify from "fastify";
import { knex } from "./database";
// import { randomUUID as uuid } from "node:crypto";

const app = fastify();

app.get("/hello", async () => {
  // const transaction = await knex("transactions")
  //   .insert({
  //     id: uuid(),
  //     title: "Transação de teste",
  //     amount: 1000,
  //   })
  //   .returning("*");

  const transactions = await knex("transactions")
    .where("amount", 1000)
    .select("*");

  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running...");
  });
