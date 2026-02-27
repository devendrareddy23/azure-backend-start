const express = require("express");
const app = express();

app.use(express.json()); // allow JSON body

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Simple in-memory users list
const users = [];
let nextId = 1;

// Create user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "name must be a string (min 2 chars)" });
  }

  const user = { id: nextId++, name: name.trim() };
  users.push(user);

  res.status(201).json(user);
});

// List users
app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
