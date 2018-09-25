const Model = require('../models')

class Controller {
    static readAll(callback) {
        Model.Student.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(students => callback(null, students))
            .catch(err => callback(err, null))
    }

    static readOne(id, callback) {
        Model.Student.findOne({
                where: {
                    id: id
                }
            })
            .then(student => callback(null, student))
            .catch(err => callback(err, null))
    }

    static add(first_name, last_name, email, callback) {
        Model.Student.create({
                first_name,
                last_name,
                email
            })
            .then(student => callback(null, student))
            .catch(err => callback(err, null))
    }

    static edit(id, first_name, last_name, email, callback) {
        Model.Student.update({
                first_name,
                last_name,
                email
            }, {
                where: {
                    id: id
                }
            })
            .then(student => callback(null, student))
            .catch(err => callback(err, null))
    }

    static delete(id, callback) {
        Model.Student.destroy({
                where: {
                    id: id
                }
            })
            .then(student => callback(null, student))
            .catch(err => callback(err, null))
    }

} //end class controller

module.exports = Controller