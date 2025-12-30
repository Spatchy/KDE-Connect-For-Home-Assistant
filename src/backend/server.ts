import fastify from "fastify";

const app = async () => {
  const app = fastify();

  app.get("/ping", (_req, reply) => {
    reply.send({ msg: "pong" });
  });

  app.get("/pong", (_req, reply) => {
    reply.send({ msg: "ping" });
  });

  if (import.meta.env.PROD) void app.listen({ port: 3000 });

  return app;
};

export const viteNodeApp = app();
