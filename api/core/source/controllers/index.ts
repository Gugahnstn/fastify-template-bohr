export const requestIp = async (request: any, reply: any) => {
  const ip = request.headers['x-forwarded-for'];
  reply.send({query: ip});
} 
