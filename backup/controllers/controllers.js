import { fetchUsersService, createUserService } from "../services/user.service.js";

export const getUsers = async (req, res) => {
  const users = await fetchUsersService();
  res.json({ data: users });
};

export const createUser = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim().length < 2) {
    const err = new Error("name must be at least 2 chars");
    err.status = 400;
    throw err;
  }

  const user = await createUserService(name.trim());
  res.status(201).json(user);
};