'use strict';
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email'
                },
                isUnique: function(email, callback) {
                    Student.findOne({
                            where: {
                                email: email
                            }
                        })
                        .then(notAvailable => {
                            notAvailable ? callback('duplicate email') : callback()
                        })
                }
            }
        }
    }, {});
    Student.associate = function(models) {
        Student.belongsToMany(models.Subject, {
            through: 'StudentSubject'
        })
    };
    return Student;
};