import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';
import { defaultResponseSchema } from '../v1.schema.js';

const personSchema = z.object({
  id: z.number(),
  name: z.string()
});

export const getPeopleResponseSchema = defaultResponseSchema.extend({
  data: z.object({
    people: z.array(personSchema)
  })
});

export const { schemas: v1_exampleSchemas, $ref } = buildJsonSchemas(
  {
    getPeopleResponseSchema
  },
  { $id: 'People' }
);
