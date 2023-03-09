import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "gui",
    email: "guest@prisma.com",
  },
});

export const app = fastify();
