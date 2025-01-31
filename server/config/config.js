import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// General configuration
const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

// Log environment variables
console.log("Running on:", process.env.NODE_ENV || 'development');
console.log("Using DATABASE_URL:", process.env.DATABASE_URL ? "✅ DATABASE_URL is set" : "❌ DATABASE_URL NOT SET!");

let sequelize;

if (process.env.DATABASE_URL) {
  console.log(`🔍 Connecting to: ${process.env.DATABASE_URL.replace(/:\/\/.*@/, "://*****:*****@")}`); // Hide password
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { require: true, rejectUnauthorized: false } : false, // Enable SSL for Render
    }
  });
} else {
  console.log("⚠ Using LOCAL database config");
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432,
      dialectOptions: {
        ssl: process.env.DB_SSL === 'true' ? { require: true, rejectUnauthorized: false } : false,
      }
    }
  );
}

// Test database connection
sequelize.authenticate()
  .then(() => console.log('✅ Connected to the database successfully.'))
  .catch(err => console.error('❌ Unable to connect to the database:', err));

export { config, sequelize };
