import { PrismaClient } from '@prisma/client'
import {logger} from "./logging";

export const prismaClient = new PrismaClient({
    log :[
        {
            emit : 'event',
            level : 'query'
        },
        {
            emit : 'event',
            level : 'error'
        },
        {
            emit : 'event',
            level : 'info'
        },
        {
            emit : 'event',
            level : 'warn'
        },
    ]
})


prismaClient.$on("error", (event) => {
    logger.error(event)
})
prismaClient.$on("info", (event) => {
    logger.error(event)
})
prismaClient.$on("query", (event) => {
    logger.error(event)
})
prismaClient.$on("warn", (event) => {
    logger.error(event)
})