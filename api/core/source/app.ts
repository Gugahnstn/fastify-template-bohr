import fastify from "fastify";
import apiRoutes from "./routes";

const Fastify = fastify({
  logger: true
});

Fastify.register(apiRoutes);

export default Fastify;