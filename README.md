# Azure Backend Starter (Node.js + Express + MongoDB)

A production-style backend starter built with clean architecture (routes → controllers → services), validation utilities, and centralized error handling. Designed to be deployable on Azure App Service.

---

## 🚀 Tech Stack
- Node.js
- Express
- MongoDB
- Git
- Azure App Service (deployment-ready)

---

## 📁 Project Structure

src/
- routes/
- controllers/
- services/
- middlewares/
- utils/
- app.js
- server.js

---

## ⚙️ Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment
Create a `.env` file using `.env.example`

### 3) Run locally
```bash
npm run dev
```

---

## 📌 Notes
- Do NOT commit `.env`
- Use Azure App Service Application Settings for production environment variables
- Structured for scalable backend development
## Version
v1.0 - Initial stable backend structure