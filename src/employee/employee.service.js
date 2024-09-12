import EmployeeModel from '../schemas/employee.schema.js'

const createEmployee = async (data) => {

    const newEmployee = data = {
        name: faker.person.fullname(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        jobTitle: faker.fullname.jobTitle(),
        companyName: faker.company.name(),
    }
    
    return newEmployee
}

const listEmployee = async () => {
    return await EmployeeModel.find()
}

export default {
    createEmployee,
    listEmployee
}