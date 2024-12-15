import type { MiddlewareHandler,Context } from "hono";

const privateMiddleware : MiddlewareHandler = async (c : Context, next) => {
    const authtoken = c.req.header('authorization')

    if (!authtoken){
        return c.json({"error":"auth token not found"},400)
    }

    if(authtoken !== "123"){
        return c.json({"error":"invalid token"},401)
    }

    await next()
};

export {privateMiddleware}