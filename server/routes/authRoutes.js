const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');
const User = require('../models/User.js');

// Routes for register and login using controller functions
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;

// Register route
router.post('/register', async (req, res) => {
    console.log('POST /register endpoint'); // Log to track if you get to this
    const { email, password } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' }); // Fixed the syntax here
    } catch (error) { 
        res.status(500).json({ error: 'Registration failed' }); // Fixed syntax here too
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Additional login logic goes here (if any)...
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

