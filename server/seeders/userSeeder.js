const User = require('../models/User'); 
const bcrypt = require('bcrypt');

const userSeeder = async () => {
    try {
        const users = [
            { email: 'user1@example.com', password: 'password1' },
            { email: 'user2@example.com', password: 'password2' },
            { email: 'user3@example.com', password: 'password3' },
        ];

        // Hash each user's password before creating
        const hashedUsers = await Promise.all(users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return { email: user.email, password: hashedPassword };
        }));

        await User.bulkCreate(hashedUsers); // This should work if User is defined correctly
        console.log('Users seeded successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

module.exports = userSeeder;