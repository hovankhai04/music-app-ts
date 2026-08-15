import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import * as database from "./configs/database"

dotenv.config()

database.connect()


const app: Express = express()
const port: number | string = process.env.PORT || 3000

// Pug
app.set("views", "./views")
app.set("view engine", "pug")
// end Pug

app.get("/topics", (req: Request, res: Response) => {
  res.render("client/pages/topics/index")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})