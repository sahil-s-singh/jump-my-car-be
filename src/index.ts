import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://hireasingh:Sahil_1657@cluster0.cumws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected...');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
