const Employee = require('../models/Employee');

const CreateEmployee = function(employeeBody) {
    const employee = new Employee(employeeBody)
    return employee.save()
}

const EditEmployee = function(id, editEmployeeBody) {
    return Employee.findOneAndUpdate({ _id: id }, editEmployeeBody, { new: true })
} 

const DeleteEmployee = function(id) {
    return Employee.findByIdAndDelete(id)
}

const GetEmployeeProfile = function(id) {
    return Employee.findOne({ _id: id })
}

const GetEmployeeList = function() {
    return Employee.find({})
}

module.exports = {
    CreateEmployee,
    EditEmployee,
    DeleteEmployee,
    GetEmployeeList,
    GetEmployeeProfile
}