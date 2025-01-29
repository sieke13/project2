import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/config.js';
import authRoutes from './routes/authRoutes.js';
import forumRoutes from './routes/forumRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use('/api/auth', authRoutes);
app.use('/api/forum', forumRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
