const { DataTypes } = require('sequelize');
const sequelize = require('../../db');
const User = require('./user');

const Instructor = sequelize.define('instructor', {
    instructor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'user_id'
        },
        onDelete: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT
    },
    profile_picture: {
        type: DataTypes.STRING
    },
    average_rating: {
        type: DataTypes.DECIMAL(3, 2)
    },
}, {
    timestamps: true
});

module.exports = Instructor;