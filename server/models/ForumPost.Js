import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config.js'; // Your Sequelize instance

export class ForumPost extends Model {}

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
        model: 'User', // Reference to the User model
        key: 'id',
      },
    },
  },
  {
    tableName: 'posts', // Specify the table name
    sequelize,
  }
);

export default ForumPost;