# Supervisor Dashboard

**Assigned to:** [Team Member Name]  
**Port:** 5177  
**Status:** 🔄 To Start

---

## 🎯 Setup Instructions

1. **Navigate to this folder:**
```bash
cd supervisor-dashboard
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
    port: 5177,
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
- Total supervised groups
- Pending evaluations
- Upcoming meetings
- Recent submissions
- Student performance overview

### **My Project Groups:**
- View all supervised groups
- Group members details
- Project progress tracking
- Group performance metrics

### **Submissions Review:**
- View all submissions from supervised groups
- Download submitted files
- Review history
- Submission status tracking

### **Evaluations:**
- Grade submissions
- Provide detailed feedback
- Evaluation rubrics
- Grade history
- Performance analytics

### **Meetings:**
- Schedule meetings with students
- Meeting calendar
- Meeting notes
- Attendance tracking

### **Progress Reports:**
- Generate student progress reports
- Group performance reports
- Export reports (PDF)

### **Communication:**
- Message students
- Group announcements
- Email notifications
- Chat with coordinators

---

## 🎨 Design Guidelines

- **Follow Coordinator Dashboard design**
- **Use EduSync branding** (E logo)
- **Color scheme:** Purple/Blue gradient (#667eea to #764ba2)
- **Header:** "Welcome back, Supervisor"
- **Icons:** Use Lucide React icons

---

## 📝 Example Pages Structure

```
supervisor-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── ProjectGroups.jsx
│   │   ├── Submissions.jsx
│   │   ├── Evaluations.jsx
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

## 🚀 Start Date: February 2026
## ✅ Target Completion: March 2026

**Reference:** Check `coordinator-dashboard` folder for design patterns!
