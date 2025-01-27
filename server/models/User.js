import { DataTypes, Model } from 'sequelize';  // Import both DataTypes and Model
import bcrypt from 'bcrypt';
import sequelize from '../config/config.js';  // Your Sequelize instance

export class User extends Model {
  // Hash the password before saving the user
  async setPassword(password) {
  this.password=password;
  }
}


//export function UserFactory(sequelize) {
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize,
    hooks: {
      beforeCreate: async (user) => {
        await user.setPassword(user.password);
      },
      beforeUpdate: async (user) => {
        await user.setPassword(user.password);
      },
    },
  }
);

export default User;
//}
/*
// Define the User model using sequelize.define()
const UserModel = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Auto-incrementing ID field
  },
  email: {
    type: DataTypes.STRING,
    unique: true,  // Ensure emails are unique
    allowNull: false,  // Email is required
    validate: {
      isEmail: true,  // Validates that the value is a valid email
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,  // Password is required
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,  // Name is optional
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

export default UserModel;

*/