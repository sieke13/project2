import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Comment;