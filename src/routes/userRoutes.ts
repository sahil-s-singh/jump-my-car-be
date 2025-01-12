import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

// Register routes correctly
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

export default router;
