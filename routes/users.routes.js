import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

// mounted under /api in src/app.js
router.get("/users", asyncHandler(getUsers));
router.post("/users", asyncHandler(createUser));

export default router;
