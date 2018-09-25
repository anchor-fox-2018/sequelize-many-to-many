const Model = require('../models')

class Controller {
    static readAll(callback) {
        Model.Subject.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(subjects => callback(null, subjects))
            .catch(err => callback(err, null))
    }

    static readOne(id, callback) {
        Model.Subject.findOne({
                where: {
                    id: id
                }
            })
            .then(subject => callback(null, subject))
            .catch(err => callback(err, null))
    }

    static add(subject_name, callback) {
        Model.Subject.create({
                subject_name
            })
            .then(subject => callback(null, subject))
            .catch(err => callback(err, null))
    }

    static edit(id, subject_name, callback) {
        Model.Subject.update({
                subject_name
            }, {
                where: {
                    id: id
                }
            })
            .then(subject => callback(null, subject))
            .catch(err => callback(err, null))
    }

    static delete(id, callback) {
        Model.Subject.destroy({
                where: {
                    id: id
                }
            })
            .then(subject => callback(null, subject))
            .catch(err => callback(err, null))
    }

} //end class controller

module.exports = Controller