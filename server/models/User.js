import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../config/config.js'; // Ensure the path is correct

class User extends Model {
  // Method to set and hash the password
  async setPassword(password) {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(password, salt); // Hash the password
  }

  // Method to compare passwords for authentication
  async validatePassword(password) {
    console.log(password,this.password)
       return await bcrypt.compare(password, this.password); // Compare provided password with hashed password
  }
}

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
        if (user.changed('password')) { 
          await user.setPassword(user.password);
        }
      },
    },
  }
);

export default User;