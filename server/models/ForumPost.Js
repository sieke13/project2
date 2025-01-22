const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const ForumPost = sequelize.define('ForumPost', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = ForumPost;
