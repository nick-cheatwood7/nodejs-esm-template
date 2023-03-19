import { z } from 'zod';
export const defaultResponseSchema = z.object({
  ok: z.boolean(),
  message: z.string(),
  data: z.object({}).optional()
});
