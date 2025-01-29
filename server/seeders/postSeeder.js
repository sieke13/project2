const ForumPost = require('../models/ForumPost.js'); 

const postSeeder = async () => {
    try {
        await ForumPost.bulkCreate([
            { title: 'First Post', content: 'This is the first post.', userId: 1 }, // Ensure userId exists
            { title: 'Second Post', content: 'This is the second post.', userId: 1 },
            { title: 'Third Post', content: 'This is the third post.', userId: 1 },
        ]);
        console.log('Posts seeded successfully.');
    } catch (error) {
        console.error('Error seeding posts:', error);
    }
};