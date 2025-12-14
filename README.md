# Project Management System - Final Year Project

**🎯 Project Goal:** Develop **Role-Based Dashboards** for 5 different user roles

**📅 Timeline:** December 2025 - June 2026

**👨‍💼 Industry Mentor Requirement:** Complete all 5 role-based dashboard frontends with proper UI/UX and role-specific features

---

## 🎓 Team Members & Role Assignments

| Member | Role | Dashboard | Status |
|--------|------|-----------|--------|
| **Hxru** | Coordinator | coordinator-dashboard | ✅ Complete |
| **Member 2** | Student | student-dashboard | ⏳ To Start |
| **Member 3** | Industry Mentor | industry-mentor-dashboard | ⏳ To Start |
| **Member 4** | Admin | admin-dashboard | ⏳ To Start |
| **Member 5** | Supervisor | supervisor-dashboard | ⏳ To Start |

---

## 📁 Project Structure

```
Level-2-software-project/
├── coordinator-dashboard/       # ✅ COMPLETED - Hxru
├── student-dashboard/          # Member 2 (To Start)
├── industry-mentor-dashboard/  # Member 3 (To Start)
├── admin-dashboard/            # Member 4 (To Start)
├── supervisor-dashboard/       # Member 5 (To Start)
├── backend/                    # (Phase 2 - After dashboards)
└── README.md
```

**Current Focus:** Complete all 5 dashboard frontends with mock data

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

### **1. Student Dashboard** 👨‍🎓
**Priority Features:**
- ✅ Dashboard overview (stats, recent activities)
- ✅ My Projects view
- ✅ Submission upload interface
- ✅ View evaluations and feedback
- ✅ Task/deadline tracker
- ✅ Profile management

**Reference:** Use Coordinator dashboard design pattern

---

### **2. Coordinator Dashboard** ✅ (COMPLETED)
**Implemented Features:**
- ✅ Overview with statistics and metrics
- ✅ Project groups management
- ✅ Submissions review interface
- ✅ Evaluation approval system
- ✅ User management (students, supervisors)
- ✅ Communication hub
- ✅ Responsive design with EduSync branding

**Status:** Ready for demonstration

---

### **3. Industry Mentor Dashboard** 👨‍💼
**Priority Features:**
- ✅ Dashboard overview (assigned projects)
- ✅ Project progress tracking
- ✅ Industry feedback interface
- ✅ Meeting scheduler with students
- ✅ Progress reports view
- ✅ Communication with project groups

**Focus:** Industry perspective on project quality and real-world applicability

---

### **4. Admin Dashboard** 🔐
**Priority Features:**
- ✅ System-wide overview (all users, all projects)
- ✅ User management (create, edit, delete all roles)
- ✅ Role and permission management
- ✅ System settings configuration
- ✅ Activity logs and reports
- ✅ Backup and security mon - PRIMARY FOCUS:**
- ⚛️ React 19.2.0 (Vite)
- 🔀 React Router DOM (routing)
- 🎨 Lucide React (icons)
- 💅 CSS3 (custom styling)
- 🎭 Mock data for demonstration

**Backend (Phase 2 - After Dashboards):**
- Node.js + Express
- MySQL Database
- JWT Authentication

**Development Ports:**
- **Coordinator:** `http://localhost:5173` ✅
- **Student:** `http://localhost:5174`
- **Industry Mentor:** `http://localhost:5175`
- **Admin:** `http://localhost:5176`
- **Supervisor:** `http://localhost:5177`
- **Backend API:** `http://localhost:5000` (Phase 2)

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
Phase 1: Dashboard Development (Current - Until March 2026)**

**Each member:**
1. **Design** your dashboard pages (on paper/Figma)
2. **Build** UI components with mock data
3. **Test** all features locally
4. **Commit** to GitHub regularly
5. **Demo** to team weekly

### **Git Workflow:**
```bash
# Before starting work
git pull origin master

# After completing features
git add .
git commit -m "Added [feature name] to [role] dashboard"
git push origin master
```

### **Design Standards (MUST FOLLOW):**
- ✅ Use **EduSync** branding (logo with "E")
- ✅ Use **purple/blue gradient** theme (#667eea to #764ba2)
- ✅ � Mock Data Strategy (Current Phase)

**All dashboards should use realistic mock data:**

```javascript
// Example: Mock users
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@uni.edu", role: "student" },
  { id: 2, name: "Dr. Smith", email: "smith@uni.edu", role: "supervisor" }
];

// Example: Mock projects
const mockProjects = [
  { id: 1, title: "AI Chatbot", group: "Group A", progress: 75, status: "active" }
];
```

**Benefits:**
- ✅ Work independently without backend
- ✅ Test all UI features
- ✅ Demo to mentor easily
- ✅ Easy to replace with real API later

---

## 🔗 Backend API Development (Phase 2 - After March 2026)

**Note:** Backend will be developed AFTER all 5 dashboards are complete

**Planned Endpoints:**
- `/api/auth/*` - Authentication
- `/api/projects/*` - Project management
- `/api/submissions/*` - File submissions
- `/api/evaluations/*` - Grading system
- `/api/users/*` - User management

**Technology:** Node.js + Express + MySQL + JWT
- `GET /api/evaluations` - Get evaluations
- `POST /api/evaluations` - Create evaluation
- `PUT /api/evaluations/:id` - Update evaluation

### **Users:**
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `PUProject Milestones

### **Phase 1: Role-Based Dashboards (Dec 2025 - March 2026)**
- [x] **Dec 2025:** Setup project repository
- [x] **Dec 2025:** Complete Coordinator Dashboard (Hxru) ✅
- [ ] **Jan 2026:** Complete Student Dashboard
- [ ] **Jan 2026:** Complete Industry Mentor Dashboard
- [ ] **Feb 2026:** Complete Admin Dashboard
- [ ] **Feb 2026:** Complete Supervisor Dashboard
- [ ] **March 2026:** Final review and polish all dashboards

### **Phase 2: Backend Integration (March - May 2026)**
- [ ] **March 2026:** Design database schema
- [ ] **April 2026:** Develop Backend API
- [ ] **April 2026:** Connect dashboards to backend
- [ ] **May 2026:** Testing and bug fixes

### **Phase 3: Final Deployment (May - June 2026)**
- [ ] **May 2026:** Integration testing
- [ ] **June 2026:** Documentation
- [ ] **June 2026:** Final deployment
- [ ] **June 2026:** Project submission

---

## 🎯 Current Focus (December 2025 - March 2026)

**PRIORITY: Complete all 5 dashboard frontends**

### **January 2026 Goals:**
- Student Dashboard: Complete UI with mock data
- Industry Mentor Dashboard: Complete UI with mock data
- Weekly team demos and feedback

### **February 2026 Goals:**
- Admin Dashboard: Complete UI with mock data
- Supervisor Dashboard: Complete UI with mock data
- Ensure consistent design across all dashboards

### **March 2026 Goals:**
- Polish all dashboards
- Fix bugs and improve UX
- Prepare for backend integration
- Demo to industry mentor
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

This is a university second year project for academic purposes.
