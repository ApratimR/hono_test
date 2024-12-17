import type { MiddlewareHandler,Context } from "hono";
import { env } from "hono/adapter";
import { verify } from "hono/jwt";

const privateMiddleware : MiddlewareHandler = async (c : Context, next) => {
    const authtoken = c.req.header('authorization')

    try {
        if (authtoken){
            const {JWT_SECRET} = env<{JWT_SECRET:string}>(c)
            
            await verify(authtoken,JWT_SECRET)
            await next()
        }else{
            return c.json({"message":"token not found"},400)
        } 
    } catch (error) {
        return c.json({"message":"token invalid"},401)
    }
};

export {privateMiddleware}