import { FastifyInstance } from "fastify";
import { queryIp } from "../controllers";

const apiRoutes = (app: FastifyInstance) => {
  app.get('/', queryIp);
};

export default apiRoutes;