import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Content Service API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Content Service running on port ${PORT}`);
});
