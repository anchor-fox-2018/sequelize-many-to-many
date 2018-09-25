const Model = require('../models')

class Controller {

    static readAll(req, res) {
        Model.Teacher.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.render('teachers/teacher', {
                teachers: data
            }))
            .catch(err => console.log(err))
    }

    static readOne(req, res) {
        let id = req.params.id

        Model.Teacher.findOne({
                where: {
                    id: id
                }
            })
            .then(data => res.render('teachers/edit-teacher', {
                teacher: data
            }))
            .catch(err => console.log(err))
    }

    static add(req, res) {
        let first_name = req.body.first_name
        let last_name = req.body.last_name
        let email = req.body.email

        Model.Teacher.create({
                first_name,
                last_name,
                email
            })
            .then(data => res.redirect('/teachers'))
            .catch(err => res.render('teachers/add-teacher', {
                err
            }))
    }

    static edit(req, res) {
        let id = req.params.id
        let first_name = req.body.first_name
        let last_name = req.body.last_name
        let email = req.body.email

        Model.Teacher.update({
                first_name,
                last_name,
                email
            }, {
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('/teachers'))
            .catch(err => res.render('teachers/add-teacher', {
                err
            }))
    }

    static delete(req, res) {
        let id = req.params.id

        Model.Teacher.destroy({
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('/teachers'))
            .catch(err => console.log(err))
    }
} //end class controller

module.exports = Controller