import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/config.js'; 

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
  },
  {
    tableName: 'forum_posts',
    sequelize,
  }
);

export default ForumPost;