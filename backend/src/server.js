const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/questions', questionRoutes);

// Database connection and server start
const PORT = process.env.PORT || 5000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
