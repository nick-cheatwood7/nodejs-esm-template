import fastifySwagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { fastify } from 'fastify';
import { version } from '../package.json';
import { router } from './api/routes/index.js';
import { v1_exampleSchemas } from './api/routes/v1/example/example.schema.js';
import { v1_healthcheckSchemas } from './api/routes/v1/healthcheck/healthcheck.schema.js';
import { __prod__ } from './utils/constants.js';

const app = fastify({
  logger: !__prod__ && { transport: { target: '@fastify/one-line-logger' } }
});

// Swagger/OpenAPI
await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Fastify API',
      description: 'Public REST API powered by Fastify',
      version: version
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    servers: [{ url: 'http://localhost:4000' }],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    },
    security: [{ apiKey: [] }]
  }
});

await app.register(swaggerUI, {
  routePrefix: '/docs',
  initOAuth: {},
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (_request, _reply, next) {
      next();
    },
    preHandler: function (_request, _reply, next) {
      next();
    }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header
});

// Rate limiter
const ONE_MINUTE = 1000 * 60;
app.register(import('@fastify/rate-limit'), {
  max: 100,
  timeWindow: ONE_MINUTE
});

// Register schemas
for (const schema of [...v1_healthcheckSchemas, ...v1_exampleSchemas]) {
  app.addSchema(schema);
}

// Register routes
app.register(router, { prefix: '/api' });

export { app };
