import express from "express";
import {auhtMiddleware} from "../middleware/auht.middleware";
import {UserController} from "../controller/user-controller";

export const authRouter = express.Router()
authRouter.use(auhtMiddleware)
authRouter.get("/api/users/me", UserController.get)
authRouter.patch("/api/users/update", UserController.update)
