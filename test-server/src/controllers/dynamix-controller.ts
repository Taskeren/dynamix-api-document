import { NextFunction, Request, Response } from "express"

export class DynamixController {

    onUploadPlayerData(req: Request, resp: Response, next: NextFunction) {
        const sid = req.cookies["connect.sid"]

        // handle the body, should be in multipart/form-data type
        // cannot be caught by Stream, so it need to be figured after setting up the server
        // TODO: Figure out what the heck is the blob from the client

        // and you may need to response a gzip content, as I received the gzip.
        resp.json({
            "rank": 200,
            "exp": 0,
            "purchaseRecord": []
        })
    }

    onEventUserData(req: Request, resp: Response, next: NextFunction) {
        const sid = req.cookies["connect.sid"]

        resp.json({
            "events": [],
            "tracks": [],
            "userdata": {
                "userid": "{user_id}",
                "paidcredit": 60,
                "assist": 1,
                "frag": 173536,
                "frtime": 8,
                "freecredit": 1,
                "freecredittime": "1676707585074",
                "wavetestmap": {
                    "s1": [4,4,4,4,4,4,4,3,3,3,2,2]
                }
            }
        })
    }

    onUploadRecord(req: Request, resp: Response, next: NextFunction) {
        const sid = req.cookies["connect.sid"]

        // handle the body, should be in multipart/form-data type
        // cannot be caught by Stream, so it need to be figured after setting up the server
        // TODO: Figure out what the heck is the blob from the client

        resp.json({
            "map": []
        })
    }

    onEventBuyTrack(req: Request, resp: Response, next: NextFunction) {
        const sid = req.cookies["connect.sid"]
        const { mapid } = req.body

        // TODO: process the buy sequence

        resp.json({
            "userdata": {
                "userid": "{user_id}",
                "paidcredit": 60,
                "assist": 1,
                "frag": 173536,
                "frtime": 8,
                "freecredit": 1,
                "freecredittime": "1676707585074",
                "wavetestmap": {
                    "s1": [4,4,4,4,4,4,4,3,3,3,2,2]
                }
            }
        })
    }

    onSubmitScore(req: Request, resp: Response, next: NextFunction) {
        const sid = req.cookies["connect.sid"]
        const { mapId, userId, score, playerName } = req.body

        // TODO: process the submit score sequence

        resp.json({
            "record": {
                "mapId": mapId,
                "userId": userId,
                "time": "1665726344292",
                "id": 2867403,
                "score": "921506",
                "valid": "valid",
                "rank": 1741,
                "playerName": playerName
            },
            "previousRecord": {
                "mapId": mapId,
                "userId": userId,
                "time": "1665726344292",
                "id": 2867403,
                "score": "921506",
                "valid": "valid",
                "rank": 1741,
                "playerName": playerName
            },
            "isHighScore": false
        })
    }
}