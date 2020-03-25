var mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name: String,
    gender: String,
    phone: String,
    created: Date,
    salary: Number,
    position: String,
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;