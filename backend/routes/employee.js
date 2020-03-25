var express = require('express');
var employeeMethod = require('../db/methods/employee.method')
var router = express.Router();

router.get('/', function(req, res, next) {
    employeeMethod.GetEmployeeList()
        .then(employees => {
            res.status(200).send(employees);
        })
        .catch(err => {
            res.status(500).send(err)
        })
});

router.get('/:id', function(req, res, next){
    const id = req.params.id
    employeeMethod.GetEmployeeProfile()
        .then(employee => {
            res.status(200).send(employee)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.post('/', function(req, res, next){
    const body = req.body
    const created = new Date()
    console.log('eee')
    employeeMethod.CreateEmployee({ ...body, created })
        .then(employee => {
            res.status(201).send(employee)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.delete('/:id', function(req, res, next){
    const id = req.params.id
    employeeMethod.DeleteEmployee(id)
        .then(() => {
            res.status(200).send()
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.put('/:id', function(req, res, next){
    const id = req.params.id
    const body = req.body
    employeeMethod.EditEmployee(id, body)
        .then(employee => {
            res.status(200).send(employee)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

module.exports = router