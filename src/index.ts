import { Hono } from 'hono'
import { PrivateRouter,PublicRouter } from './routes'

const app = new Hono()

app.route("/public",PublicRouter)
app.route("/private",PrivateRouter)

export default app
