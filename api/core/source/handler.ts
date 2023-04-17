import { ServerlessAdapter } from '@h4ad/serverless-adapter';
import { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';
import { FastifyFramework } from '@h4ad/serverless-adapter/lib/frameworks/fastify';
import { PromiseResolver } from '@h4ad/serverless-adapter/lib/resolvers/promise';
import { ApiGatewayV2Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';
import { Fastify } from './app';

export const handler = ServerlessAdapter.new(Fastify)
  .setFramework(new FastifyFramework())
  .setHandler(new DefaultHandler())
  .setResolver(new PromiseResolver())
  .addAdapter(new ApiGatewayV2Adapter())
  .build();