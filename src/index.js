import express from 'express';
import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';
import { authMiddleware } from './middleware/auth.middleware.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', authMiddleware, todoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Todo API running on http://localhost:${port}`);
});
