import { Request, Response, NextFunction } from "express"

export class LoginController {

    /**
     * Get the "connect.sid" by posting username and password
     */
    onLogin(req: Request, resp: Response, next: NextFunction) {
        // login
        const { username, password } = req.body

        // TODO: processing logic here

        resp.cookie("connect.sid", "{sid_value}", {
            path: "/",
            httpOnly: true
        })

        resp.json({
            "result": "succeed"
        })
    }

    /**
     * Get the userid and the token
     * 
     * Be called right after `/login`, with "connect.sid" in the cookie.
     * 
     * "AWSELB" and "AWSELBCORS" seem to be related with Amazon Elastic Load Balancing.
     * For more, see https://aws.amazon.com/cn/elasticloadbalancing/
     */
    onToken(req: Request, resp: Response, next: NextFunction) {
        // token
        const sid = req.cookies["connect.sid"]
        const { appname } = req.body

        if(appname == "Dynamix") {
            // resp.cookie("AWSELB", "what_is_that?", {
            //     path: "/",
            //     maxAge: 7200
            // })
            // resp.cookie("AWSELBCORS", "what_is_that?", {
            //     path: "/",
            //     maxAge: 7200,
            //     secure: true,
            //     sameSite: "none"
            // })
            resp.json({
                "userid": "{user_id}",
                "token": "{token_code}"
            })
        } else {
            // I don't know what will happen if the appname is not correct.
            // TODO: Check the actual return if the appname is not correct.
            resp.status(400)
            resp.json({
                "result": "no such appname found"
            })
        }
    }
}