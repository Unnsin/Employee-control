var mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    Name: String,
    gender: String,
    phone: String,
    date_added: Date,
    salary: Number,
    position: String,
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;