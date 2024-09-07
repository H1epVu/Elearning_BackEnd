const { DataTypes } = require('sequelize');
const sequelize = require('../../db');
const User = require('./user');
const Course = require('./course');

const Enrollment = sequelize.define('enrollment', {
  enrollment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'course_id',
    },
  },
  enrollment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
    timestamps: false
});

module.exports = Enrollment;