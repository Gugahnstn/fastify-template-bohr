import apiRoutes from "./routes";
import fastify from "fastify";

const app = fastify({ logger: true });

apiRoutes(app);

export default app;
