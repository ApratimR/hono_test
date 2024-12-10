import { Hono } from 'hono'
import {public_router} from './modules/public/router'
import { private_router } from './modules/private/router'

const app = new Hono()

app.route("/public",public_router)
app.route("/private",private_router)

export default app
