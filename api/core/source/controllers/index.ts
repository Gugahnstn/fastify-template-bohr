export const queryIp = async (request: any, reply: any) => {
  const ip = request.ip;
  return {
    message: 'Fastify-Template-Bohr-io', 
    query: ip
  }
};