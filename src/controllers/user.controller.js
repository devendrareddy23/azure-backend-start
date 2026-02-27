import { asyncHandler } from "../utils/asyncHandler.js";
import { createUserService } from "../services/user.service.js";

export const createUserController = asyncHandler(async (req, res) => {
  const user = await createUserService(req.body);
  res.status(201).json(user);
});
