const Model = require('../models')

class Controller {

    static readAll(req, res) {
        Model.Student.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.render('students/student', {
                students: data
            }))
            .catch(err => res.render())
    }

    static readOne(req, res) {
        let id = req.params.id

        Model.Student.findOne({
                where: {
                    id: id
                }
            })
            .then(data => res.render('students/edit-student', {
                student: data
            }))
            .catch(err => console.log(err))
    }

    static add(req, res) {
        let first_name = req.body.first_name
        let last_name = req.body.last_name
        let email = req.body.email

        Model.Student.create({
                first_name,
                last_name,
                email
            })
            .then(data => res.redirect('/students'))
            .catch(err => res.render('students/add-student', {
                err
            }))
    }

    static edit(req, res) {
        let id = req.params.id
        let first_name = req.body.first_name
        let last_name = req.body.last_name
        let email = req.body.email

        Model.Student.update({
                first_name,
                last_name,
                email
            }, {
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('/students'))
            .catch(err => res.render('students/edit-student', {
                err
            }))
    }

    static delete(req, res) {
        let id = req.params.id

        Model.Student.destroy({
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('/students'))
            .catch(err => console.log(err))
    }

    static showData(req, res) {
        let id = req.params.id
        Model.Student.findOne({
                where: {
                    id: id
                }
            })
            .then(student => Model.Subject.findAll()
                .then(subjects => {
                    res.render('students/add-subject-to-student', {
                        student: student,
                        subjects: subjects
                    })
                }))
            .catch(err => console.log(err))
    }


    static addSubject(req, res) {
        let StudentId = req.params.id
        let SubjectId = req.body.SubjectId

        Model.StudentSubject.create({
            StudentId,
            SubjectId
        })

        .then(data => res.redirect('/students'))
            .catch(err => console.log(err))
    }

} //end class controller

module.exports = Controller