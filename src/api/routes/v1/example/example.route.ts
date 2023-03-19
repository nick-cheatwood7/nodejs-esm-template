import type { FastifyInstance, FastifyReply, RegisterOptions } from 'fastify';
import { $ref } from './example.schema.js';

const people = [
  {
    id: 1,
    name: 'Luke Skywalker'
  },
  {
    id: 2,
    name: 'Darth Vader'
  }
];

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
          200: $ref('getPeopleResponseSchema')
        },
        tags: ['Example']
      }
    },
    (_, reply: FastifyReply) => {
      reply.code(200).send({ ok: true, message: 'Ok', data: { people } });
    }
  );
  done();
}
