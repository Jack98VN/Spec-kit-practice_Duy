import bcrypt from 'bcryptjs';

const users = [];
let nextUserId = 1;

export const createUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: nextUserId++, email, password: hashedPassword };
  users.push(user);
  return { id: user.id, email: user.email };
};

export const findUserByEmail = async (email) => {
  return users.find((user) => user.email === email) || null;
};

export const findUserById = async (id) => {
  return users.find((user) => user.id === id) || null;
};
