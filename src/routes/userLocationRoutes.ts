import express from 'express';
import * as userLocationController from '../controllers/userLocationController';

const router = express.Router();

router.put('/', userLocationController.updateLocation);

export default router;
