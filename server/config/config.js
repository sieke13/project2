const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_URL, { //ERROR....
  logging: console.log, // Enable logging for debugging
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;



// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// // Load environment variables from a .env file
// dotenv.config();

// // Create a new Sequelize instance for PostgreSQL
// const sequelize = new Sequelize(process.env.DB_URL, {
//   dialect: 'postgres',
//   logging: false,  // Disable query logging (optional)
// });

// export default sequelize;
