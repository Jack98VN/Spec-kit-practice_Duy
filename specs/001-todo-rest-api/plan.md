# Todo REST API Plan

## Architecture

- Express.js web server
- JWT authentication layer
- Controller layer for request handling
- Repository layer for in-memory data storage
- Middleware for auth validation

## Components

- `src/index.js` - Application entry point
- `src/routes/auth.routes.js` - Auth route definitions
- `src/routes/todo.routes.js` - Todo route definitions
- `src/controllers/auth.controller.js` - Register and login logic
- `src/controllers/todo.controller.js` - Todo CRUD logic
- `src/repositories/user.repository.js` - In-memory user store
- `src/repositories/todo.repository.js` - In-memory todo store
- `src/middleware/auth.middleware.js` - JWT validation middleware

## API Design

### Auth

- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Login and return JWT

### Todos

- `POST /api/todos` - Create a todo
- `GET /api/todos` - List todos with optional `search`, `status`, `page`, `limit`
- `GET /api/todos/:id` - Get todo details
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## Testing Strategy

- Use Jest and Supertest for API integration tests
- Validate happy paths and failure cases for auth and todos
- Cover registration, login, create, read, update, delete
- Validate authorization and access control
