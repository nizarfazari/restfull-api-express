import {NextFunction,Response ,Request} from "express";
import {prismaClient} from "../application/database";
import {User} from "@prisma/client";


export interface UserRequest extends Request {
    user? : User
}


export const auhtMiddleware = async ( req : UserRequest, res : Response,next: NextFunction) => {
    const token  = req.get('X-API-TOKEN')

    if (token){
        const user = await prismaClient.user.findFirst({
            where : {
                token : token
            }
        })

        if(user){
            req.user = user
            next()
            return
        }
    }

    res.status(401).json({
        errors : "Unauthorized"
    }).end()
}