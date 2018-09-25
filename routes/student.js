const routes = require('express').Router()
const Controller = require('../controllers/student.js')

routes.get('/', Controller.readAll)

//add student
routes.get('/add', (req, res) => {
    res.render('students/add-student')
})

routes.post('/add', Controller.add)

//edit student
routes.get('/edit/:id', Controller.readOne)
routes.post('/edit/:id', Controller.edit)

//delete student
routes.get('/delete/:id', Controller.delete)

//add subject student
routes.get('/:id/addSubject', Controller.showData)
routes.post('/:id/addSubject', Controller.addSubject)

module.exports = routes