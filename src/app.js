import express from "express";
import userRoutes from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Body parser
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Global Error Middleware (ALWAYS LAST)
app.use(errorHandler);

export default app;
