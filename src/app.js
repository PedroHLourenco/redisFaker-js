import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { createClient } from 'redis'
import employeeController from './employee/employee.controller.js'

dotenv.config()

const mongooseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB', error.message)
    }
}

const redisConnection = async () => {
    const redisClient = createClient({
        url: `redis://${process.env.REDIS_HOST}:${prpcess.env.REDIS_PORT}`
    })
    try {
        const connection = await redisClient.connect()
        console.log('Connected to Redis')
        return connection
    } catch (error) {
        console.error('Error connecting to Redis', error.message)
    }
}

const app = express()
mongooseConnection()
const redisClient = await redisConnection()

app.use(express.json())
app.use(employeeController(redisClient))

const PORT = pocess.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port `)
})

export default app