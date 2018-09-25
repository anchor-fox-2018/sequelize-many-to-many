'use strict';
module.exports = (sequelize, DataTypes) => {
    const StudentSubject = sequelize.define('StudentSubject', {
        StudentId: DataTypes.INTEGER,
        SubjectId: DataTypes.INTEGER,
        StudentScore: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {});
    StudentSubject.associate = function(models) {

    };
    return StudentSubject;
};