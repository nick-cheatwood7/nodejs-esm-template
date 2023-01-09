import type { FastifyInstance, RouteShorthandOptions } from "fastify";
import { router as v1Router } from "./v1/index.js";

export function router(
    fastify: FastifyInstance,
    _opts: RouteShorthandOptions,
    done: Function
) {
    fastify.register(v1Router, { prefix: "v1" });
    done();
}
