import { urlencoded } from "body-parser"
import cookieParser from "cookie-parser"
import express, { Router } from "express"
import { DynamixController } from "../controllers/dynamix-controller"

/* Methods in this router is used in `dynamix-server.c4-cat.com` for gameplay. */

export class DynamixRoutes {
	router: Router
	controller: DynamixController

	constructor() {
		this.router = express.Router()
		this.controller = new DynamixController()

		this.router.use(urlencoded({ extended: false }))
		this.router.use(cookieParser())

		this.router.get("/event/userdata", this.controller.onEventUserData)
		this.router.post("/uploadPlayerData", this.controller.onUploadPlayerData)
        this.router.post("/uploadRecord", this.controller.onUploadRecord)
        this.router.post("/event/buyTrack", this.controller.onEventBuyTrack)
        this.router.post("/submitScore", this.controller.onSubmitScore)
	}
}
