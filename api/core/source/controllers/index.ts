import { FastifyRequest, FastifyReply } from "fastify";

export const queryIp = async (request: FastifyRequest, reply: FastifyReply) => {
  const ip = await request.ip;
  reply.send({
    message: 'Fastify-Template-Bohr-io', 
    query: ip,
  });
};