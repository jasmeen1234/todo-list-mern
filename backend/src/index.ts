import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://jasmeenbano12:PqlpgopvIyoZigFH@cluster0.g7hbq3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);
const mongooseOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
// Connect to MongoDB
mongoose.connect(MONGO_URI, mongooseOptions
    // Use this option to handle deprecation warning
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
