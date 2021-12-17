import { config as dotenv} from "dotenv";
dotenv();

export const config = {
    host: process.env.DB_HOST || "localhost", /* si no quiero especificar variables de entorno*/
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "react"
}