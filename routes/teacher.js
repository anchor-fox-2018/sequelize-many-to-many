const routes = require('express').Router()
const Controller = require('../controllers/teacher.js')

routes.get('/', (req, res) => {
    Controller.readAll((err, data) => {
        err ? res.send(err) : res.render('teachers/teacher', {
            teachers: data
        })
    })
})

//add teacher
routes.get('/add', (req, res) => {
    res.render('teachers/add-teacher')
})

routes.post('/add', (req, res) => {
    Controller.add(req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
        err ? console.log(err) : res.redirect('/teachers')

    })
})

//edit teacher
routes.get('/edit/:id', (req, res) => {
    Controller.readOne(req.params.id, (err, data) => {
        err ? console.log(err) : res.render('teachers/edit-teacher', {
            teacher: data
        })
    })
})

routes.post('/edit/:id', (req, res) => {
    Controller.edit(req.params.id, req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
        err ? console.log(err) : res.redirect('/teachers')
    })
})

//delete teacher
routes.get('/delete/:id', (req, res) => {
    Controller.delete(req.params.id, (err, data) => {
        err ? console.log(err) : res.redirect('/teachers')
    })
})

module.exports = routes