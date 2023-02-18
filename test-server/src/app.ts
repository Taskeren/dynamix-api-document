import express, { Express, Request, Response } from "express"
import { DynamixRoutes } from "./routes/dynamix-routes"
import { LoginRoutes } from "./routes/login-routes"

const app: Express = express()

app.get("/", (req: Request, resp: Response) => {
    resp.json({
        "success": true,
        "message": "Dyfused presents Dynamix Test Server"
    })
})

app.use(new LoginRoutes().router)
app.use(new DynamixRoutes().router)

app.use((req: Request, resp: Response) => {
    resp.status(404).json({
        "success": false,
        "message": "Not Found: the resource can be moved away temporarily or permanently."
    })
})

app.listen(8080, () => {
    console.log("Dynamix Test Server is running")
})