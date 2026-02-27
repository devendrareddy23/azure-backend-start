import { createApp } from "./app.js";

const app = createApp();

const PORT = Number(process.env.PORT) || 3000;

// Bind to IPv4 for local + Azure friendliness
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});