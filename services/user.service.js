const users = [];
let nextId = 1;

export const fetchUsersService = async () => users;

export const createUserService = async (name) => {
  const user = { id: nextId++, name };
  users.push(user);
  return user;
};
