import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config, sequelize } from './config/config.js';
import routes from './routes/index.js'; 

dotenv.config(); // ✅ Load environment variables at the start

// Create an instance of the Express application
const app = express();

// Set the port number from environment variables or default to 5000
const PORT = config.port;

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
app.use(routes);

// Serve the main HTML file for the root URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Sync the Sequelize models with the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});