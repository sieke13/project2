import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config.js'; // Adjust the path as necessary

class ForumPost extends Model {}

ForumPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // Name of the table
        key: 'id',
      },
    },
  },
  {
    tableName: 'posts',
    sequelize,
  }
);

export default ForumPost;