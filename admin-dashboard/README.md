# Admin Dashboard

**Assigned to:** [Team Member Name]  
**Port:** 5176  
**Status:** 🔄 To Start

---

## 🎯 Setup Instructions

1. **Navigate to this folder:**
```bash
cd admin-dashboard
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
    port: 5176,
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
- System-wide statistics
- Total users (all roles)
- Active projects count
- System health monitoring
- Recent activities

### **User Management:**
- View all users (Students, Coordinators, Supervisors, Industry Mentors)
- Create new users
- Edit user details
- Assign/change roles
- Activate/deactivate users
- Bulk user operations

### **Role Management:**
- Define role permissions
- Access control settings
- Role assignment

### **System Settings:**
- General system configuration
- Email settings
- Backup configuration
- Security settings
- API keys management

### **Activity Logs:**
- View system logs
- User activity tracking
- Error logs
- Audit trail

### **Data Management:**
- Database backup
- Data export (CSV, Excel)
- Data import
- System restore

### **Security:**
- Password policies
- Session management
- IP whitelisting
- Security alerts

---

## 🎨 Design Guidelines

- **Follow Coordinator Dashboard design**
- **Use EduSync branding** (E logo)
- **Color scheme:** Purple/Blue gradient (#667eea to #764ba2)
- **Header:** "Welcome back, Admin"
- **Icons:** Use Lucide React icons
- **Add red accents for critical actions (delete, etc.)**

---

## 📝 Example Pages Structure

```
admin-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── UserManagement.jsx
│   │   ├── RoleManagement.jsx
│   │   ├── SystemSettings.jsx
│   │   ├── ActivityLogs.jsx
│   │   ├── DataManagement.jsx
│   │   └── Security.jsx
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
