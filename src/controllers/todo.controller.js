import {
  createTodoItem,
  findTodoById,
  findTodosByOwner,
  updateTodoItem,
  deleteTodoItem,
} from '../repositories/todo.repository.js';

const validateTodoPayload = ({ title, description }, { requiredTitle = true } = {}) => {
  const errors = [];
  if (requiredTitle) {
    if (!title || title.trim() === '') {
      errors.push('Title is required');
    }
  }

  if (title && title.length > 100) {
    errors.push('Title must be at most 100 characters');
  }

  if (description && description.length > 500) {
    errors.push('Description must be at most 500 characters');
  }

  return errors;
};

export const createTodo = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const errors = validateTodoPayload({ title, description });
  if (errors.length) {
    return res.status(400).json({ errors });
  }

  const todo = await createTodoItem({
    title,
    description,
    dueDate,
    ownerId: req.user.id,
  });

  res.status(201).json({ todo });
};

export const getTodos = async (req, res) => {
  const { search, status, page, limit } = req.query;
  const result = await findTodosByOwner({
    ownerId: req.user.id,
    search,
    status,
    page,
    limit,
  });
  res.json(result);
};

export const getTodoById = async (req, res) => {
  const todo = await findTodoById(req.params.id);
  if (!todo || todo.ownerId !== req.user.id) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json({ todo });
};

export const updateTodo = async (req, res) => {
  const todo = await findTodoById(req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  if (todo.ownerId !== req.user.id) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const errors = validateTodoPayload(req.body, { requiredTitle: false });
  if (errors.length) {
    return res.status(400).json({ errors });
  }

  const updated = await updateTodoItem(todo, req.body);
  res.json({ todo: updated });
};

export const deleteTodo = async (req, res) => {
  const todo = await findTodoById(req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  if (todo.ownerId !== req.user.id) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  await deleteTodoItem(todo);
  res.status(204).send();
};
