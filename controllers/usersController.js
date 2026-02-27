let users = [];
let nextId = 1;

exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "name must be a string (min 2 chars)" });
  }

  const user = { id: nextId++, name: name.trim() };
  users.push(user);

  res.status(201).json(user);
};

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
};