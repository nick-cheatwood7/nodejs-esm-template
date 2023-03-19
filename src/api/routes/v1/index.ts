import type { FastifyInstance, RouteShorthandOptions } from 'fastify';
import exampleRouter from './example/example.route.js';
import healthcheckRouter from './healthcheck/healthcheck.route.js';

export function router(
  fastify: FastifyInstance,
  _opts: RouteShorthandOptions,
  done: Function
) {
  fastify.register(healthcheckRouter, { prefix: '/healthcheck' });
  fastify.register(exampleRouter, { prefix: '/example' });
  done();
}
