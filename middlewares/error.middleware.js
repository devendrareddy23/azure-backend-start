export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  console.error("GLOBAL_ERROR:", {
    message: err.message,
    status,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(status).json({
    error: err.message || "Internal Server Error",
  });
};
