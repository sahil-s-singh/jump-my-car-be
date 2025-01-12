import express from 'express';
import userRoutes from './routes/userRoutes';
import userLocationRoutes from './routes/userLocationRoutes';

import { verifyToken } from './middlewares/verifyToken'

const app = express();

app.use(express.json());
app.use('/users', verifyToken, userRoutes);
app.use('/location', verifyToken, userLocationRoutes);

export default app;
