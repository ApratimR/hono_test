import type { MiddlewareHandler,Context } from "hono";

const publicMiddleware : MiddlewareHandler = async (c : Context, next) => {
    const start = Date.now(); // Capture the start time

    await next(); // Pass control to the next middleware/handler

    const duration = Date.now() - start; // Calculate the time difference
    console.log(`Request to ${c.req.url} took ${duration}ms`);
};

export { publicMiddleware }