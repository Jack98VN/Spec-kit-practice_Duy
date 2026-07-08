# Todo REST API Specification

## Requirements

Build a Todo REST API with the following features:

- User registration and login
- JWT authentication
- Create, read, update, delete todos
- Search todos by title and description
- Filter todos by status (completed / pending)
- Pagination for todo lists
- Docker support for local development

## Acceptance Criteria

1. Users can register with a unique email and password.
2. Users can login and receive a JWT token.
3. Authenticated users can create todos.
4. Authenticated users can get their todos with pagination.
5. Authenticated users can update and delete only their own todos.
6. Users can search todos by title or description using a query parameter.
7. Users can filter todos by status using a query parameter.
8. All todo endpoints require a valid JWT token.

## Edge Cases

- Registering with an email already in use returns 400.
- Login with invalid credentials returns 401.
- Accessing todo endpoints without a token returns 401.
- Trying to update or delete another users todo returns 403.
- Requesting a page number beyond available pages returns an empty list.

## Assumptions

- Passwords are hashed before storing.
- JWT expires after 1 hour.
- Each user only sees their own todos.
- The API uses an in-memory or file-based datastore for practice.

## Business Rules

- A todo has title, description, due date, completed flag, and owner user id.
- Title is required and max 100 chars.
- Description is optional and max 500 chars.
- Only authenticated users can manage todos.
