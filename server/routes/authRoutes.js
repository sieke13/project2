import { Router } from 'express';
import { register, login } from '../controllers/authController.js'; 

const router = Router();

// Registration Route
// /api/auth/register
router.post('/register', register);

// Login 
// /api/auth/login
router.post('/login', login);

export default router;
