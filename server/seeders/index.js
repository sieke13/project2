const sequelize = require('../config/config'); 
const userSeeder = require('./userSeeder'); 
const postSeeder = require('./postSeeder'); 

const seedDatabase = async () => {
    try {
        await sequelize.authenticate(); // Ensure the database connection is established
        console.log('Database connected successfully.');

        await userSeeder(); // Run the user seeder
        await postSeeder(); // Run the post seeder

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        await sequelize.close(); // Close the database connection
    }
};

seedDatabase();