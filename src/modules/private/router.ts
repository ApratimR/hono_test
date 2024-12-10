import { Hono } from "hono";
import { privateMiddleware } from "./middleware";

const private_router = new Hono()

private_router.use(privateMiddleware)

private_router.post("/test",async (c) => {
  
    let payload = null

    await c.req.json().then((data)=>{
        payload = data
    }).catch((err)=>{
        payload = {"message":"empty request"}
    })

    console.log(payload)
    return c.json(payload)
})

export {private_router}