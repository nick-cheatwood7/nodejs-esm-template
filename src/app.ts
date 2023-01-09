import { fastify } from "fastify";
import { router } from "./api/routes/index.js";
import { __prod__ } from "./utils/constants.js";

const app = fastify({
    logger: !__prod__ && { transport: { target: "@fastify/one-line-logger" } }
});

// Register routes
app.register(router, { prefix: "api" });

export { app };
