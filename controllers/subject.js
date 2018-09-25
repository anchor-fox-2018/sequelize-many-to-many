const Model = require('../models')

class Controller {

    static readAll(req, res) {
        Model.Subject.findAll({
                include: [Model.Teacher],
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.render('subjects/subject', {
                subjects: data
            }))
            .catch(err => console.log(err))
    }

    static readOne(req, res) {
        let id = req.params.id

        Model.Subject.findOne({
                where: {
                    id: id
                }
            })
            .then(data => res.render('subjects/edit-subject', {
                subject: data
            }))
            .catch(err => console.log(err))
    }

    static add(req, res) {
        let subject_name = req.body.subject_name

        Model.Subject.create({
                subject_name
            })
            .then(data => res.redirect('/subject'))
            .catch(err => console.log(err))
    }

    static edit(req, res) {
        let id = req.params.id
        let subject_name = req.body.subject_name

        Model.Subject.update({
                subject_name
            }, {
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('/subject'))
            .catch(err => console.log(err))
    }

    static delete(req, res) {
        let id = req.params.id

        Model.Subject.destroy({
                where: {
                    id: id
                }
            })
            .then(data => res.redirect('/subject'))
            .catch(err => console.log(err))
    }

    static enroll(req, res) {
        let id = req.params.id

        Model.Subject.findOne({
                include: [Model.Student],
                where: {
                    id: id
                },
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.render('subjects/enroll', {
                subject: data
            }))
            .catch(err => console.log(err))
    }

    static showData(req, res) {
        let SubjectId = req.params.id

        Model.StudentSubject.findOne({
                where: {
                    SubjectId: SubjectId
                }
            })
            .then(data => res.render('subjects/score', {
                SubjectId: data.SubjectId
            }))
            .catch(err => console.log(err))
    }

    static score(req, res) {
        let SubjectId = req.params.id
        let StudentScore = req.body.score

        Model.StudentSubject.update({
                StudentScore
            }, {
                where: {
                    SubjectId: SubjectId
                }
            })
            .then(data => res.redirect('/subjects'))
            .catch(err => console.log(err))
    }


} //end class controller

module.exports = Controller