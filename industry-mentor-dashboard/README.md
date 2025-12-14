# Industry Mentor Dashboard

**Assigned to:** [Team Member Name]  
**Port:** 5175  
**Status:** 🔄 To Start

---

## 🎯 Setup Instructions

1. **Navigate to this folder:**
```bash
cd industry-mentor-dashboard
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
    port: 5175,
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
- Assigned projects count
- Upcoming meetings
- Recent feedback given
- Industry insights shared

### **Assigned Projects:**
- View all assigned project groups
- Project progress tracking
- Team member details
- Review project documentation

### **Industry Feedback:**
- Provide industry-specific feedback
- Review project feasibility
- Real-world applicability assessment
- Technology recommendations

### **Meetings:**
- Schedule meetings with students
- View meeting history
- Meeting notes and action items

### **Reports:**
- Generate progress reports
- Industry compliance checklist
- Market analysis for projects

### **Communication:**
- Message students and coordinators
- Group discussions
- Announcement board

---

## 🎨 Design Guidelines

- **Follow Coordinator Dashboard design**
- **Use EduSync branding** (E logo)
- **Color scheme:** Purple/Blue gradient (#667eea to #764ba2)
- **Header:** "Welcome back, Industry Mentor"
- **Icons:** Use Lucide React icons

---

## 📝 Example Pages Structure

```
industry-mentor-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── AssignedProjects.jsx
│   │   ├── Feedback.jsx
│   │   ├── Meetings.jsx
│   │   ├── Reports.jsx
│   │   └── Communication.jsx
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
