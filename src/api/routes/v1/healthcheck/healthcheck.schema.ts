import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';
import { defaultResponseSchema } from '../v1.schema.js';

export const getHealthcheckResponseSchema = defaultResponseSchema.extend({
  data: z.string()
});

export const { schemas: v1_healthcheckSchemas, $ref } = buildJsonSchemas(
  {
    getHealthcheckResponseSchema
  },
  { $id: 'Healthcheck' }
);
