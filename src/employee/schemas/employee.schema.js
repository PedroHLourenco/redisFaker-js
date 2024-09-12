import {Schema, model} from 'mongoose'

const EmployeeSchema = new Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    jobtitle: {type: String},    
    company: {type: String},
}, { timestamps: true})

export default Schema