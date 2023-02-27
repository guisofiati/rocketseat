import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";
import { randomUUID as uuid } from "crypto";
import { checkSessionIdExists } from "../middlewares/check-session-id-exists";

export async function transactionsRoutes(app: FastifyInstance) {
  // handler global
  // app.addHook("preHandler", async (request, reply) => {
  // });

  app.get(
    "/",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const { sessionId } = request.cookies;

      const transactions = await knex("transactions")
        .where("session_id", sessionId)
        .select();

      // retornar em objeto poder receber outras coisas
      return {
        transactions,
      };
    },
  );

  app.get(
    "/:id",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const { sessionId } = request.cookies;

      const getTransactionParamsSchema = z.object({
        id: z.string().uuid(),
      });

      const { id } = getTransactionParamsSchema.parse(request.params);

      const transaction = await knex("transactions")
        // .where("id", id)
        // .andWhere("session_id", sessionId)
        .where({
          session_id: sessionId,
          id,
        })
        .first();

      return {
        transaction,
      };
    },
  );

  app.get(
    "/summary",
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const { sessionId } = request.cookies;

      const summary = await knex("transactions")
        .where("session_id", sessionId)
        .sum("amount", { as: "amount" })
        .first();

      return {
        summary,
      };
    },
  );

  app.post("/", async (request, reply) => {
    // request.body. = sem intelisense
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    // se o parse não bater, da erro e não executa mais nada para baixo
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    );

    // ver o id do cookie do user
    let sessionId = request.cookies.sessionId;

    // caso nao tenha, cria.
    // tambem informa quais rotas utilizaram os dados dos cookies, e a expiracao
    if (!sessionId) {
      sessionId = uuid();

      reply.cookie("sessionId", sessionId, {
        path: "/",
        // expires: new Date('2023-12-01T08:00:00')
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1seg, 60min, 1hour, 1day, 7days
      });
    }

    // nao ta tipado, knex nao reconhece os campos da tabela
    await knex("transactions").insert({
      id: uuid(),
      title,
      amount: type === "credit" ? amount : amount * -1,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });
}
