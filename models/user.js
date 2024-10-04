// models/user.js
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Sync the model with the database (create table if it doesn't exist)
User.sync();

module.exports = User;
