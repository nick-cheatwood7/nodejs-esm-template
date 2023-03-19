import type { FastifyInstance, FastifyReply, RegisterOptions } from 'fastify';
import { $ref } from './healthcheck.schema.js';

export default function (
  fastify: FastifyInstance,
  _opt: RegisterOptions,
  done: Function
) {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: $ref('getHealthcheckResponseSchema')
        },
        tags: ['Healthcheck']
      }
    },
    (_, reply: FastifyReply) => {
      reply.code(200).send({ ok: true, message: 'Ok', data: 'OK!' });
    }
  );
  done();
}
