import { Context } from "hono";
import { env } from "hono/adapter";

export const getDbUri = (c : Context) => {
    const { DB_URI } = env<{ DB_URI: string }>(c);
    return DB_URI;
  };