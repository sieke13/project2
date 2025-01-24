const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const authRoutes = require('./routes/api/authRoutes');  // Import authentication routes
const forumRoutes = require('./routes/api/forumRoutes');  // Import forum routes
const sequelize = require('./config/config');  // Sequelize configuration
// Initialize environment variables
dotenv.config();
// Create an instance of Express app
const app = express();
// Middleware
app.use(cors());  // Enable CORS for cross-origin requests
app.use(express.json());  // To parse JSON request bodies
// API Routes
app.use('/api/auth', authRoutes);  // Authentication routes (login/register)
app.use('/api/forum', forumRoutes);  // Forum routes (posts)
// Sequelize Synchronization
sequelize.sync({ force: false })  // Set to true for resetting DB in development (not recommended in production)
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
// Server Start
const port = process.env.PORT || 5000;  // Use PORT from .env or default to 5000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});











Message project-two-megatron




