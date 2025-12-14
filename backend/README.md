# Backend API - Project Management System

**Status:** 📝 Planning Phase

**Start Date:** April 2026 (After all dashboards are complete)

---

## 🎯 Purpose

This folder will contain the shared backend API that connects all 5 role-based dashboards:
- Coordinator Dashboard
- Student Dashboard
- Industry Mentor Dashboard
- Admin Dashboard
- Supervisor Dashboard

---

## 🔧 Planned Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Validation:** express-validator
- **Security:** bcryptjs, helmet, cors

---

## 📁 Planned Folder Structure

```
backend/
├── config/
│   ├── database.js          # MySQL connection
│   └── config.js            # App configuration
├── models/
│   ├── User.js
│   ├── Project.js
│   ├── Submission.js
│   └── Evaluation.js
├── controllers/
│   ├── authController.js
│   ├── projectController.js
│   ├── submissionController.js
│   ├── evaluationController.js
│   └── userController.js
├── routes/
│   ├── authRoutes.js
│   ├── projectRoutes.js
│   ├── submissionRoutes.js
│   ├── evaluationRoutes.js
│   └── userRoutes.js
├── middleware/
│   ├── auth.js              # JWT verification
│   └── roleAuth.js          # Role-based access control
├── uploads/                 # File upload directory
├── .env                     # Environment variables
├── .gitignore
├── server.js               # Main entry point
└── package.json
```

---

## 📋 Development Plan

### **Phase 1: Setup (April 2026)**
- [ ] Initialize npm project
- [ ] Install dependencies
- [ ] Setup MySQL database
- [ ] Create database schema
- [ ] Configure environment variables

### **Phase 2: Authentication (April 2026)**
- [ ] User registration
- [ ] Login with JWT
- [ ] Role-based authentication
- [ ] Password hashing

### **Phase 3: API Development (April-May 2026)**
- [ ] User management endpoints
- [ ] Project management endpoints
- [ ] Submission endpoints
- [ ] Evaluation endpoints
- [ ] Communication endpoints

### **Phase 4: Integration (May 2026)**
- [ ] Connect all 5 dashboards
- [ ] File upload functionality
- [ ] Real-time updates
- [ ] Testing

---

## 🔗 API Endpoints (Planned)

### **Authentication**
```
POST   /api/auth/register        # Register new user
POST   /api/auth/login           # Login (all roles)
GET    /api/auth/me              # Get current user
POST   /api/auth/logout          # Logout
```

### **Users**
```
GET    /api/users                # Get all users (admin/coordinator)
GET    /api/users/:id            # Get specific user
POST   /api/users                # Create user (admin)
PUT    /api/users/:id            # Update user
DELETE /api/users/:id            # Delete user (admin)
```

### **Projects**
```
GET    /api/projects             # Get all projects
POST   /api/projects             # Create project
GET    /api/projects/:id         # Get project details
PUT    /api/projects/:id         # Update project
DELETE /api/projects/:id         # Delete project
```

### **Submissions**
```
GET    /api/submissions          # Get submissions
POST   /api/submissions          # Upload submission
GET    /api/submissions/:id      # Get submission details
PUT    /api/submissions/:id      # Update submission
DELETE /api/submissions/:id      # Delete submission
```

### **Evaluations**
```
GET    /api/evaluations          # Get evaluations
POST   /api/evaluations          # Create evaluation
GET    /api/evaluations/:id      # Get evaluation details
PUT    /api/evaluations/:id      # Update evaluation
```

---

## 🗄️ Database Schema (Planned)

### **Users Table**
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('student', 'coordinator', 'industry_mentor', 'admin', 'supervisor'),
    status ENUM('active', 'inactive'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Projects Table**
```sql
CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    description TEXT,
    supervisor_id INT,
    status ENUM('active', 'pending', 'completed'),
    progress INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supervisor_id) REFERENCES users(id)
);
```

### **Submissions Table**
```sql
CREATE TABLE submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT,
    title VARCHAR(200),
    file_path VARCHAR(500),
    submitted_by INT,
    status ENUM('submitted', 'reviewed', 'approved'),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (submitted_by) REFERENCES users(id)
);
```

### **Evaluations Table**
```sql
CREATE TABLE evaluations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    submission_id INT,
    evaluator_id INT,
    score INT,
    feedback TEXT,
    evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES submissions(id),
    FOREIGN KEY (evaluator_id) REFERENCES users(id)
);
```

---

## 🔐 Environment Variables (.env)

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=project_management
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## 🚀 Getting Started (When Phase 2 begins)

```bash
cd backend

# Install dependencies
npm install express mysql2 bcryptjs jsonwebtoken cors dotenv express-validator multer

# Create .env file
# Add your environment variables

# Start development server
npm run dev
```

---

## 📝 Notes

- This backend will serve ALL 5 dashboards
- All team members will contribute to backend development
- Backend development starts AFTER all dashboards are complete
- Use this README as a guide when starting Phase 2

---

**Last Updated:** December 2025  
**Next Update:** April 2026 (Phase 2 start)
