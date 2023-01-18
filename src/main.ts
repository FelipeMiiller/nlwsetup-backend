import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);
app.get("/", async (req, res) => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "beber",
      },
    },
  });

  return habits;
});

app.listen({ port: 3000 }).then((res) => {
  console.log(`HTTP server listening  on : ${res}`);
});
