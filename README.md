# Full-Stack-E-commerce-Mobile-Shop
# AURA Accessories — Premium Mobile Accessories E-commerce Platform

A commercial-grade full-stack e-commerce platform for high-performance mobile accessories (GaN chargers, MagSafe cases, smart cables, wireless power banks, and audiophile gear), engineered following the [PRD.md](file:///e:/Full-Stack/PRD.md) 30-day roadmap.

---

## 🏛 Architecture

- **Frontend**: React 18 + Vite, Tailwind CSS, Redux Toolkit, React Router DOM, Axios, Lucide React.
  - Path: `/frontend`
  - Anti-FOUC inline theme script supporting `light`, `dark`, and `system` preferences.
  - Custom design tokens, micro-interactions, responsive navigation, and button system.
- **Backend**: Node.js + Express.js + Mongoose (MongoDB).
  - Path: `/backend`
  - Modular architecture: controllers, services, middleware, routes, models, and centralized error handling with uniform API response envelopes.
  - Security hardening: Helmet, CORS isolation, sanitized JSON parsers.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB Atlas or local MongoDB instance

### 2. Installation
Run the following from the root directory:
```powershell
# Install both backend and frontend dependencies
npm.cmd run install:all
```

Or install individually:
```powershell
cd backend; npm.cmd install
cd ../frontend; npm.cmd install
```

### 3. Running Development Servers
Run the backend:
```powershell
npm.cmd run dev:backend
# API starts at http://localhost:5000 (Health check: http://localhost:5000/api/health)
```

In a separate terminal, run the frontend:
```powershell
npm.cmd run dev:frontend
# Client starts at http://localhost:5173
```

### 4. Production Build
```powershell
npm.cmd run build:frontend
```

---

## 📅 Roadmap Progress

- [x] **Day 1**: Architecture + Setup (Monorepo structure, Tailwind design system, Light/Dark/System theme system, Redux store, Express modular server, Health API).
- [ ] **Day 2**: Backend Foundation (MongoDB Atlas connection, models foundation, validation middleware).
- [ ] **Day 3**: Customer Authentication (Register, Login, JWT, password hashing, protected routes).
- [ ] ...
- [ ] **Day 30**: Final Production Audit & Launch.
