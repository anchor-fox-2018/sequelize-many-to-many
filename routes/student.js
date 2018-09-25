const routes = require('express').Router()
const Controller = require('../controllers/student.js')

routes.get('/', (req, res) => {
    Controller.readAll((err, data) => {
        err ? res.send(err) : res.render('students/student', {
            students: data
        })
    })
})

//add student
routes.get('/add', (req, res) => {
    res.render('students/add-student')
})

routes.post('/add', (req, res) => {
    Controller.add(req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
        err ? console.log(err) : res.redirect('/students')

    })
})

//edit student
routes.get('/edit/:id', (req, res) => {
    Controller.readOne(req.params.id, (err, data) => {
        err ? console.log(err) : res.render('students/edit-student', {
            student: data
        })
    })
})

routes.post('/edit/:id', (req, res) => {
    Controller.edit(req.params.id, req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
        err ? console.log(err) : res.redirect('/students')
    })
})

//delete student
routes.get('/delete/:id', (req, res) => {
    Controller.delete(req.params.id, (err, data) => {
        err ? console.log(err) : res.redirect('/students')
    })
})

module.exports = routes