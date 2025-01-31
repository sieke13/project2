import express from 'express';
import cors from 'cors';
import { config, sequelize } from './config/config.js';  // Import config and database connection

const app = express();

// Middleware
app.use(express.json());  // Parses JSON request bodies
app.use(cors());  // Enable CORS for cross-origin requests

// Test Route
app.get('/', (req, res) => {
  res.send('🌟 Server is running successfully!');
});

// Ensure database connection and sync models
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Connected to the database successfully.');
    return sequelize.sync();  // Sync models with database
  })
  .then(() => {
    console.log('🚀 Database synced!');
    
    // Start the server after database sync
    const PORT = config.port;
    app.listen(PORT, () => {
      console.log(`🔥 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });

export default app;
