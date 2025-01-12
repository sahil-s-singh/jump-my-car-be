import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserById = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await userService.updateUserById(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUserById = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await userService.deleteUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
