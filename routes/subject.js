const routes = require('express').Router()
const Controller = require('../controllers/subject.js')

routes.get('/', Controller.readAll)

//add subject
routes.get('/add', (req, res) => {
    res.render('subjects/add-subject')
})

routes.post('/add', Controller.add)

//edit subject
routes.get('/edit/:id', Controller.readOne)
routes.post('/edit/:id', Controller.edit)

//delete subject
routes.get('/delete/:id', Controller.delete)

//enrolled
routes.get('/:id/enroll', Controller.enroll)

//score
routes.get('/:id/score', Controller.showData)
routes.post('/:id/score', Controller.score)

module.exports = routes