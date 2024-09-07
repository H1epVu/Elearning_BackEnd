const { DataTypes } = require('sequelize');
const sequelize = require('../../db');
const Instructor = require('./instructor');
const Category = require('./category');

const Course = sequelize.define('course', {
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'category_id',
        },
    },
    instructor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Instructor,
            key: 'instructor_id',
        },
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true
});

module.exports = Course;