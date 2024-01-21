import { config } from "dotenv";
import z from "zod";

config();

const envSchema = z.object({
  PORT: z.number().default(3333),
  DATABASE_URL: z.string(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const envServer = envSchema.safeParse({
  PORT: Number(process.env.PORT || 3333),
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error("There is an error with the server environment variables");
  process.exit(1);
}

export const envServerSchema = envServer.data;
