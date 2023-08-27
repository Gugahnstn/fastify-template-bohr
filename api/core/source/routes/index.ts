import { queryIp } from "../controllers";

const apiRoutes = async (fastify: any) => {
  fastify.get('/api', queryIp);
}

export default apiRoutes;