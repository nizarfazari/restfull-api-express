import express from 'express'
import {publicRouter} from "../router/public-api";
import {errorMiddleware} from "../middleware/error-middleware";
import {authRouter} from "../router/auth-api";

export const app = express()
app.use(express.json())
app.use(publicRouter)
app.use(authRouter)
app.use(errorMiddleware)
