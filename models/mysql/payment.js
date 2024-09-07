const { DataTypes } = require('sequelize');
const sequelize = require('../../db');
const User = require('./user');
const Course = require('./course');

const Payment = sequelize.define('payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'course_id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true
});

module.exports = Payment;