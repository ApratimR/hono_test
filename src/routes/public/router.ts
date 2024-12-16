import { Hono } from "hono";
import { publicMiddleware } from "./middleware";
import { sign } from "hono/jwt";
import { env } from "hono/adapter";

const public_router = new Hono()

public_router.use(publicMiddleware)

public_router.post("/test",async (c) => {
  
    let payload = null

    await c.req.json().then((data)=>{
        payload = data
    }).catch((err)=>{
        payload = {"message":"empty request"}
    })

    console.log(payload)
    return c.json(payload)
})

public_router.post("/signin",async (c) => {

    const {JWT_SECRET} = env<{JWT_SECRET:string}>(c)

    const token = await sign({"role":"user"},JWT_SECRET)

    return c.json({"token":token})
})

export default public_router