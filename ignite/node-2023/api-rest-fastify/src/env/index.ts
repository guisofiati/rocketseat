import { config } from "dotenv";
import { z } from "zod";

// quando utilizamos Jest ou Vitest, eles preenchem a variavel NODE_ENV com test
if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test" }); // muda para o env.test
} else {
  config(); // se nao, .env
}

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
});

// console.log(process.env);
// console.log(process.env.NODE_ENV);

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("⚠️ Invalid environment variables!", _env.error.format());

  throw new Error("Invalid environment variables");
}

export const env = _env.data;
