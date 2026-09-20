# Implementation Plan - Day 1: Architecture + Setup

Establish the core foundational architecture for the **Mobile Accessories E-commerce Platform** across frontend and backend, including design tokens, theme system, folder structure, and environment templates based on [PRD.md](file:///e:/Full-Stack/PRD.md).

## Proposed Architecture

```
e:\Full-Stack\
├── .gitignore
├── README.md
├── package.json               # Root scripts to orchestrate frontend & backend
│
├── frontend/                  # React + Vite + Tailwind CSS + Redux Toolkit
│   ├── index.html             # With Anti-FOUC theme script
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js     # Custom design tokens, dark mode class, typography
│   ├── postcss.config.js
│   ├── .env.example
│   └── src/
│       ├── assets/            # Static assets, branding marks
│       ├── components/
│       │   ├── common/        # Buttons, ThemeToggle, Skeletons, Navbar, Footer
│       │   └── ui/            # Reusable UI primitives
│       ├── layouts/           # CustomerLayout, AdminLayout
│       ├── pages/             # HomePage, ShopPage, AdminDashboard, Auth pages
│       ├── routes/            # AppRouter (React Router DOM)
│       ├── store/             # Redux Toolkit (store.js, slices/themeSlice.js)
│       ├── services/          # Axios instance and API wrappers
│       ├── hooks/             # Custom hooks (useTheme, useMediaQuery)
│       ├── utils/
│       ├── index.css          # Design tokens, CSS variables, base styles
│       ├── App.jsx
│       └── main.jsx
│
└── backend/                   # Node.js + Express.js + Mongoose
    ├── package.json
    ├── .env.example
    └── src/
        ├── config/            # DB connection, Cloudinary, environment config
        ├── controllers/       # Request handlers
        ├── middleware/        # Error handler, auth, validation, rate limiters
        ├── models/            # Mongoose schemas
        ├── routes/            # Modular route definitions (/api/v1/...)
        ├── services/          # Business logic & payment abstractions
        ├── utils/             # Helpers, logger, response formatters
        ├── app.js             # Express app setup, CORS, Helmet, routes
        └── server.js          # Entry point & graceful shutdown
```

---

## User Review Required

> [!NOTE]
> - `npm.cmd` will be used for execution to bypass Windows PowerShell script execution policy restrictions.
> - Git is not yet detected on the system `PATH`. We will create standard `.gitignore` and initialize project files so that once Git is configured, a simple `git init && git add . && git commit` will record the Day 1 milestone cleanly.

---

## Proposed Changes

### Root Level
- [NEW] `.gitignore` — Ignores `node_modules`, `.env`, `.env.local`, `dist`, logs.
- [NEW] `package.json` — Root orchestration with convenience scripts (`dev:frontend`, `dev:backend`, `dev`, `build`).

### Frontend Setup (`/frontend`)
- [NEW] `frontend/package.json` — React 18/19, Vite, Tailwind CSS, Lucide React, Redux Toolkit, React Router DOM, Axios, Zod.
- [NEW] `frontend/vite.config.js` — Vite configuration with path aliases (`@/`).
- [NEW] `frontend/tailwind.config.js` — Configured with `darkMode: 'class'` and premium design tokens:
  - Slate/Zinc neutrals for Apple/Samsung-like clarity.
  - Accent colors (cyan/electric blue, amber warning, emerald success).
  - Custom border radius and subtle shadows.
- [NEW] `frontend/index.html` — Features inline anti-FOUC script preventing theme flash on load.
- [NEW] `frontend/src/index.css` — Modern CSS variables for light/dark mode, smooth scrollbar, and typography defaults.
- [NEW] `frontend/src/store/index.js` & `slices/themeSlice.js` — Theme state management (supports `light`, `dark`, `system`).
- [NEW] `frontend/src/components/common/ThemeToggle.jsx` — Elegant micro-animated theme switch button.
- [NEW] `frontend/src/components/common/Button.jsx` — Day 1 implementation of the Premium Button System (Section 6 of PRD).
- [NEW] `frontend/src/layouts/RootLayout.jsx` — Base layout with responsive Header and Footer shells.
- [NEW] `frontend/src/pages/HomePage.jsx` — Day 1 placeholder with premium hero and theme demonstrator.
- [NEW] `frontend/src/services/api.js` — Pre-configured Axios client.
- [NEW] `frontend/.env.example` — Vite client environment variables.

### Backend Setup (`/backend`)
- [NEW] `backend/package.json` — Express, Mongoose, dotenv, cors, helmet, morgan, bcryptjs, jsonwebtoken.
- [NEW] `backend/src/config/db.js` — MongoDB connection logic with robust reconnect handling.
- [NEW] `backend/src/middleware/errorHandler.js` — Centralized JSON error handling & 404 handler.
- [NEW] `backend/src/utils/apiResponse.js` — Standardized API success and error envelope.
- [NEW] `backend/src/routes/healthRoutes.js` — Health check endpoint (`GET /api/health`).
- [NEW] `backend/src/app.js` — Express configuration with Helmet, CORS, and json parsers.
- [NEW] `backend/src/server.js` — Server listener with port fallback and error listeners.
- [NEW] `backend/.env.example` — Environment variables schema per Section 36 of PRD.

---

## Verification Plan

### Automated / Command-Line Verification
1. **Frontend dependencies install & build**:
   ```powershell
   cd e:\Full-Stack\frontend; npm.cmd install; npm.cmd run build
   ```
2. **Backend dependencies install & syntax check**:
   ```powershell
   cd e:\Full-Stack\backend; npm.cmd install; node src/server.js (test health endpoint or run dry)
   ```
3. **API Health check**:
   Launch backend, make a request to `http://localhost:5000/api/health`, and confirm status `200 OK` with JSON response.
4. **Frontend Dev Server test**:
   Launch Vite server, verify index loads with clean styles and without console errors.
