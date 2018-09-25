const routes = require('express').Router()
const Controller = require('../controllers/teacher.js')

routes.get('/', Controller.readAll)

//add teacher
routes.get('/add', (req, res) => {
    res.render('teachers/add-teacher')
})

routes.post('/add', Controller.add)

//edit teacher
routes.get('/edit/:id', Controller.readOne)
routes.post('/edit/:id', Controller.edit)

//delete teacher
routes.get('/delete/:id', Controller.delete)

module.exports = routes