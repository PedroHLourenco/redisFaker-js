import express from 'express'
import employeeService from './employee.service.js'

const employeeController = (redisClient) => {
    const router = express.Router()

    router.post('/employee', async (req, res) => {
        await employeeService.createEmployee(req.body)
        res.status(201).json({ message: 'Employee added succesfully' })
    })

    router.get('/employee', async (req, res) => {
        res.json(findedEmployees)
    })

    router.get('/employee/redis', async (req, res) => {

        const cacheKey = 'employees'
        const cachedEmployees = await redisClient.get(cacheKey)

        if (cachedEmployees) {
            return res.json(JSON.parse(cachedEmployees))
        }
        
        const findedEmployees = await employeeService.listEmployee()
        await redisClient.set(cacheKey, JSON.stringify(findedEmployees), {EX: 25})

        res.json(findedEmployees)
    })

    return router
}

export default employeeController