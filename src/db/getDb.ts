import { env } from "hono/adapter"
import mongoose from "mongoose"


const connectDB = async () => {
    try {
        const DB_URI =  process.env["DB_URI"]


        
    } catch (error:any) {
        console.error(`Error: ${error.message}`)
    }
}