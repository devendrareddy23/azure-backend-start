import { fetchUsersService, createUserService } from "../services/user.service.js";

export const getUsers = async (req, res) => {
  const users = await fetchUsersService();
  return res.json({ data: users });
};

export const createUser = async (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    const err = new Error("name must be a string (min 2 chars)");
    err.status = 400;
    throw err;
  }

  const user = await createUserService(name.trim());
  return res.status(201).json(user);
};
