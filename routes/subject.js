const routes = require('express').Router()
const Controller = require('../controllers/subject.js')

routes.get('/', (req, res) => {
    Controller.readAll((err, data) => {
        err ? res.send(err) : res.render('subjects/subject', {
            subjects: data
        })
    })
})

//add subject
routes.get('/add', (req, res) => {
    res.render('subjects/add-subject')
})

routes.post('/add', (req, res) => {
    Controller.add(req.body.subject_name, (err, data) => {
        err ? console.log(err) : res.redirect('/subjects')

    })
})

//edit subject
routes.get('/edit/:id', (req, res) => {
    Controller.readOne(req.params.id, (err, data) => {
        err ? console.log(err) : res.render('subjects/edit-subject', {
            subject: data
        })
    })
})

routes.post('/edit/:id', (req, res) => {
    Controller.edit(req.params.id, req.body.subject_name, (err, data) => {
        err ? console.log(err) : res.redirect('/subjects')
    })
})

//delete subject
routes.get('/delete/:id', (req, res) => {
    Controller.delete(req.params.id, (err, data) => {
        err ? console.log(err) : res.redirect('/subjects')
    })
})

module.exports = routes