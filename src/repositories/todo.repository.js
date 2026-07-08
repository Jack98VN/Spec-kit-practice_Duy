const todos = [];
let nextTodoId = 1;

export const createTodoItem = async ({ title, description, dueDate, ownerId }) => {
  const todo = {
    id: nextTodoId++,
    title,
    description: description || '',
    dueDate: dueDate || null,
    completed: false,
    ownerId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  todos.push(todo);
  return todo;
};

export const findTodoById = async (id) => {
  return todos.find((todo) => todo.id === Number(id)) || null;
};

export const findTodosByOwner = async ({ ownerId, search, status, page, limit }) => {
  let items = todos.filter((todo) => todo.ownerId === ownerId);

  if (search) {
    const lower = search.toLowerCase();
    items = items.filter(
      (todo) =>
        todo.title.toLowerCase().includes(lower) ||
        todo.description.toLowerCase().includes(lower)
    );
  }

  if (status === 'completed') {
    items = items.filter((todo) => todo.completed === true);
  } else if (status === 'pending') {
    items = items.filter((todo) => todo.completed === false);
  }

  const total = items.length;
  const pageNumber = Number(page) > 0 ? Number(page) : 1;
  const pageSize = Number(limit) > 0 ? Number(limit) : 10;
  const startIndex = (pageNumber - 1) * pageSize;
  const pagedItems = items.slice(startIndex, startIndex + pageSize);

  return {
    items: pagedItems,
    pagination: {
      total,
      page: pageNumber,
      limit: pageSize,
      pages: Math.ceil(total / pageSize),
    },
  };
};

export const updateTodoItem = async (todo, updates) => {
  todo.title = updates.title ?? todo.title;
  todo.description = updates.description ?? todo.description;
  todo.dueDate = updates.dueDate ?? todo.dueDate;
  if (typeof updates.completed === 'boolean') {
    todo.completed = updates.completed;
  }
  todo.updatedAt = new Date().toISOString();
  return todo;
};

export const deleteTodoItem = async (todo) => {
  const index = todos.findIndex((item) => item.id === todo.id);
  if (index >= 0) {
    todos.splice(index, 1);
  }
};
