# Student Dashboard

**Assigned to:** [Team Member Name]  
**Port:** 5174  
**Status:** 🔄 To Start

---

## 🎯 Setup Instructions

1. **Navigate to this folder:**
```bash
cd student-dashboard
```

2. **Create React app:**
```bash
npm create vite@latest . -- --template react
npm install
npm install react-router-dom lucide-react
```

3. **Configure port in vite.config.js:**
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true
  }
})
```

4. **Run the app:**
```bash
npm run dev
```

---

## 📋 Required Features

### **Dashboard Overview:**
- Total projects assigned
- Upcoming deadlines
- Recent submissions
- Pending tasks

### **My Projects:**
- View all assigned projects
- Project details and requirements
- Team members list
- Supervisor information

### **Submissions:**
- Upload project files
- View submission history
- Download previous submissions
- Track submission status

### **Evaluations:**
- View grades and feedback
- Evaluation history
- Performance metrics

### **Communication:**
- Message supervisor
- Group chat with team members
- Notifications

### **Profile:**
- View/edit profile information
- Change password

---

## 🎨 Design Guidelines

- **Follow Coordinator Dashboard design**
- **Use EduSync branding** (E logo)
- **Color scheme:** Purple/Blue gradient (#667eea to #764ba2)
- **Header:** "Welcome back, Student"
- **Icons:** Use Lucide React icons

---

## 📝 Example Pages Structure

```
student-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── MyProjects.jsx
│   │   ├── Submissions.jsx
│   │   ├── Evaluations.jsx
│   │   ├── Communication.jsx
│   │   └── Profile.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   └── App.jsx
```

---

## 🚀 Start Date: January 2026
## ✅ Target Completion: February 2026

**Reference:** Check `coordinator-dashboard` folder for design patterns!
