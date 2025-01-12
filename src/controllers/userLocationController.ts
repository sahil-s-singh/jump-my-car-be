import { Request, Response } from 'express';
import * as locationService from '../services/userLocationService';

export const updateLocation = async (req: Request, res: Response): Promise<any> => {
  try {
    await locationService.updateLocation((req as any).user.uid, req.body);
    return res.status(200).json({ message: 'Location updated successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
