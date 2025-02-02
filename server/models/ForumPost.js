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
      validate: {
        len: [1, 255],
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'Post',
    sequelize,
    timestamps: false,
  }
);

// Define associations
ForumPost.associate = (models) => {
  ForumPost.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

export default ForumPost;