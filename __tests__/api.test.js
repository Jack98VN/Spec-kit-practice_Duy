import request from 'supertest';
import express from 'express';
import authRoutes from '../src/routes/auth.routes.js';
import todoRoutes from '../src/routes/todo.routes.js';
import { authMiddleware } from '../src/middleware/auth.middleware.js';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/todos', authMiddleware, todoRoutes);

let token;

describe('Todo REST API', () => {
  it('registers a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'Password123' });

    expect(response.status).toBe(201);
    expect(response.body.user).toMatchObject({ email: 'test@example.com' });
  });

  it('logs in the user and returns a token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'Password123' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
    token = response.body.token;
  });

  it('creates a todo item', async () => {
    const response = await request(app)
      .post('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Practice spec flow', description: 'Complete the full flow' });

    expect(response.status).toBe(201);
    expect(response.body.todo.title).toBe('Practice spec flow');
  });

  it('gets todos with pagination and search', async () => {
    const response = await request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .query({ search: 'practice', page: 1, limit: 5 });

    expect(response.status).toBe(200);
    expect(response.body.items).toHaveLength(1);
    expect(response.body.pagination.page).toBe(1);
  });

  it('updates a todo item', async () => {
    const listResponse = await request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`);

    const todoId = listResponse.body.items[0].id;

    const response = await request(app)
      .put(`/api/todos/${todoId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Practice spec flow updated', completed: true });

    expect(response.status).toBe(200);
    expect(response.body.todo.completed).toBe(true);
  });

  it('deletes a todo item', async () => {
    const listResponse = await request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`);

    const todoId = listResponse.body.items[0].id;

    const response = await request(app)
      .delete(`/api/todos/${todoId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
