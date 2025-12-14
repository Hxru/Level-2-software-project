# Project Management System - Final Year Project

## 🎓 Team Members & Role Assignments

| Member | Role | Dashboard | Status |
|--------|------|-----------|--------|
| **Hxru** | Coordinator | coordinator-dashboard | ✅ Complete |
| **Member 2** | Student | student-dashboard | 🔄 In Progress |
| **Member 3** | Industry Mentor | industry-mentor-dashboard | ⏳ Pending |
| **Member 4** | Admin | admin-dashboard | ⏳ Pending |
| **Member 5** | Supervisor | supervisor-dashboard | ⏳ Pending |

---

## 📁 Project Structure

```
Level-2-software-project/
├── coordinator-dashboard/       # ✅ Completed - Hxru
├── student-dashboard/          # Assign to Member 2
├── industry-mentor-dashboard/  # Assign to Member 3
├── admin-dashboard/            # Assign to Member 4
├── supervisor-dashboard/       # Assign to Member 5
├── backend/                    # Shared by all members
└── README.md
```

---

## 🚀 Getting Started

### **For All Team Members:**

1. **Clone the repository:**
```bash
git clone https://github.com/Hxru/Level-2-software-project.git
cd Level-2-software-project
```

2. **Navigate to your assigned dashboard folder:**
```bash
# Example for Student dashboard
cd student-dashboard
```

3. **Create your React app:**
```bash
npm create vite@latest . -- --template react
npm install
npm install react-router-dom lucide-react
```

4. **Run your dashboard:**
```bash
npm run dev
```

5. **Commit and push your work:**
```bash
git add .
git commit -m "Added [your-role] dashboard"
git pull origin master
git push origin master
```

---

## 🎨 Dashboard Requirements by Role

### **1. Student Dashboard**
**Features:**
- View assigned projects
- Upload submissions
- View evaluations and feedback
- Task management
- Communication with supervisor

### **2. Coordinator Dashboard** ✅
**Features:**
- Overview of all projects
- Project groups management
- Submissions review
- Evaluations approval
- User management
- Communication hub

### **3. Industry Mentor Dashboard**
**Features:**
- View assigned projects
- Provide industry feedback
- Review project progress
- Meeting scheduling
- Communication with students

### **4. Admin Dashboard**
**Features:**
- System-wide user management
- Role and permission management
- System settings
- Data backup and restore
- Activity logs
- Security settings

### **5. Supervisor Dashboard**
**Features:**
- View assigned project groups
- Review student submissions
- Provide feedback and grades
- Meeting management
- Progress tracking
- Communication with students

---

## 🔧 Tech Stack

**Frontend (All Dashboards):**
- React (Vite)
- React Router DOM
- Lucide React (icons)
- CSS3

**Backend (Shared):**
- Node.js + Express
- MySQL Database
- JWT Authentication

**Ports:**
- Coordinator: `http://localhost:5173`
- Student: `http://localhost:5174`
- Industry Mentor: `http://localhost:5175`
- Admin: `http://localhost:5176`
- Supervisor: `http://localhost:5177`
- Backend API: `http://localhost:5000`

---

## 📝 Development Workflow

### **Branch Strategy:**
```bash
# Create feature branch
git checkout -b feature/your-dashboard-name

# After completing work
git add .
git commit -m "Description of changes"
git push origin feature/your-dashboard-name

# Create Pull Request on GitHub
```

### **Best Practices:**
- ✅ Commit frequently with clear messages
- ✅ Pull latest changes before starting work
- ✅ Test your dashboard before pushing
- ✅ Follow the coordinator dashboard design pattern
- ✅ Use the same color scheme and components

---

## 🔗 Backend API Endpoints (To Be Developed)

### **Authentication:**
- `POST /api/auth/login` - Login for all roles
- `POST /api/auth/register` - Register new user
- `GET /api/auth/me` - Get current user

### **Projects:**
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### **Submissions:**
- `GET /api/submissions` - Get submissions
- `POST /api/submissions` - Upload submission
- `GET /api/submissions/:id` - Get specific submission

### **Evaluations:**
- `GET /api/evaluations` - Get evaluations
- `POST /api/evaluations` - Create evaluation
- `PUT /api/evaluations/:id` - Update evaluation

### **Users:**
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

---

## 📞 Communication

**Team Coordination:**
- Regular meetings (Weekly)
- GitHub Issues for bug tracking
- Pull Requests for code review

**Contact:**
- Repository: https://github.com/Hxru/Level-2-software-project
- Issues: https://github.com/Hxru/Level-2-software-project/issues

---

## ✅ Milestones

- [x] Setup project repository
- [x] Complete Coordinator Dashboard (Hxru)
- [ ] Complete Student Dashboard
- [ ] Complete Industry Mentor Dashboard
- [ ] Complete Admin Dashboard
- [ ] Complete Supervisor Dashboard
- [ ] Develop Backend API
- [ ] Database setup
- [ ] Integration testing
- [ ] Deployment

---

## 🎯 Current Focus

**Week 1-2:**
- Each member builds their dashboard UI with mock data
- Follow the Coordinator dashboard design pattern

**Week 3-4:**
- Backend API development (shared work)
- Database schema design

**Week 5-6:**
- Integration of frontend with backend
- Testing and bug fixes

---

## 📄 License

This is a university final year project for academic purposes.
