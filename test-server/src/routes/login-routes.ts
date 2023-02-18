import { urlencoded } from "body-parser"
import cookieParser from "cookie-parser"
import express, { Router } from "express"
import { LoginController } from "../controllers/login-controller"

/* Methods in this router is used in `c4id.c4-cat.com` for authorization. */

export class LoginRoutes {
	router: Router
	controller: LoginController

	constructor() {
		this.router = express.Router()
		this.controller = new LoginController()

		this.router.use(urlencoded({ extended: false }))
		this.router.use(cookieParser())

		this.router.post("/login", this.controller.onLogin)
		this.router.post("/token", this.controller.onToken)
	}
}
