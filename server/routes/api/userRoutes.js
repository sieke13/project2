import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../../controllers/userController.js'; 

const router = express.Router();

// GET /users - Get all users
// /api/api/users
router.get('/', getUsers);

// GET /users/:id - Get a user by id
// /api/api/users/:id
router.get('/:id', getUserById);

// POST /users - Create a new user
// /api/api/users
router.post('/', createUser);

// PUT /users/:id - Update a user by 
// /api/api/users/:id
router.put('/:id', updateUser);

// DELETE /users/:id - Delete a user by id
// /api/api/users/:id
router.delete('/:id', deleteUser);

export default router;