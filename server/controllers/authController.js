//OPTION A
import { hash } from 'bcrypt';
import { User } from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//const User = require('../models/User.js');

export const register = async (req, res) => {
  try {
    console.log ('hashing password');
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log ('password hashed creating new user, HASH: ', hashedPassword);
    
    const newUser = await User.create({ email, password: hashedPassword });
    console.log('user created successfully');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('registration failed', error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

export const login = async (req, res) => {
  try {
    //console.log('Login Form Payload:', req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
   // console.log('Queried User:', user);
    if (!user) return res.status(404).json({ message: 'User not found' });



    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid password' });
  


    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
    console.log('login success');
  } catch (error) {
    console.error('login failed', error);
    res.status(500).json({ message: 'Error logging in' });
  }
};



