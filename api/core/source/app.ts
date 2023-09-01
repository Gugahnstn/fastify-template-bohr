import apiRoutes from "./routes";
import fastify from "fastify";

const app = fastify({ logger: true });

app.register(apiRoutes);

export default app;
