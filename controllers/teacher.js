const Model = require('../models')

class Controller {
    static readAll(callback) {
        Model.Teacher.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(teachers => callback(null, teachers))
            .catch(err => callback(err, null))
    }

    static readOne(id, callback) {
        Model.Teacher.findOne({
                where: {
                    id: id
                }
            })
            .then(teacher => callback(null, teacher))
            .catch(err => callback(err, null))
    }

    static add(first_name, last_name, email, callback) {
        Model.Teacher.create({
                first_name,
                last_name,
                email
            })
            .then(teacher => callback(null, teacher))
            .catch(err => callback(err, null))
    }

    static edit(id, first_name, last_name, email, callback) {
        Model.Teacher.update({
                first_name,
                last_name,
                email
            }, {
                where: {
                    id: id
                }
            })
            .then(teacher => callback(null, teacher))
            .catch(err => callback(err, null))
    }

    static delete(id, callback) {
        Model.Teacher.destroy({
                where: {
                    id: id
                }
            })
            .then(teacher => callback(null, teacher))
            .catch(err => callback(err, null))
    }

} //end class controller

module.exports = Controller