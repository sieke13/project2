import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config, sequelize } from './config/config.js';
import routes from './routes/index.js';

dotenv.config(); // Load environment variables at the start

// Create an instance of the Express application
const app = express();

// Set the port number from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Resolve the __dirname variable for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client's dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Use the consolidated routes
app.use('/api', routes); // Ensure routes are prefixed with /api

// Serve the main HTML file for the root URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Ensure database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to the database successfully.');
    return sequelize.sync(); // Sync models with database
  })
  .then(() => {
    console.log('🚀 Database synced!');
    
    // Start the server after database sync
    app.listen(PORT, () => {
      console.log(`🔥 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });

export default app;