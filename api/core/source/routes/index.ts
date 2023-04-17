import { requestIp } from "../controllers";
import { Fastify } from "../app";

Fastify.get('/api', requestIp);