import { Hono } from "hono";
import { publicMiddleware } from "./middleware";

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

export {public_router}