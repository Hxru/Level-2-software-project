# Industry Mentor Dashboard - Final Version
   
**Assigned to:** [Medinie Edirisinghe]  
**Port:** 3000
**Status:** 🔄 Ongoing

---

## 🎯 Setup Instructions

1. **Navigate to this folder:**
```bash
cd edusync-mentor-dashboard
```

2. **Create React app:**
```bash
npx create -react-app edusync-mentor-dashboard
npm install
npm install react-router-dom lucide-react
```

3. **Install and Configure Tailwind CSS:**
```bash   
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. **Configure Tailwind in tailwind.config.js:**
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. **Update src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Run the app:**
```bash
npm start
```

---

## 📋 Required Features

### **Dashboard Overview:**
- Summary cards (Assigned Groups, Ongoing, Delayed, Completed projects)
- Assigned projects list with progress bars
- Upcoming deadlines calendar
- Recent activity feed
- Quick statistics overview Industry insights shared

### **Project Workspace:**
**Overview Tab:**
- Project description
- Group members with roles
- Overall progress tracking

**Tasks & Timeline Tab:**
- Complete task list with deadlines
- Progress indicators per task
- Task status (Completed, In Progress, Delayed, Not Started)
- Add comments to tasks

**Files & Submissions Tab:**
- View submitted files
- Download documents
- Add comments on submissions
- File version tracking

**Feedback Tab:**
- View feedback history
- Add new feedback to projects
- Supervisor and mentor comments

### **Communication & Settings:**

**Messages:**
- Chat interface with students and supervisors
- Conversation list with unread indicators
- Real-time messaging interface
- Search conversations

**Notifications:**
- System notifications (file uploads, delays, deadlines)
- Categorized by type (file, alert, feedback, deadline)
- Notification history


**Profile & Settings:**
- Edit profile information
- Notification preferences
- Change password
- Department and contact info


---

## 🎨 Design Guidelines

- **Follow Coordinator Dashboard design**  
- **Color scheme:** Slate sidebar (#1f2937 to #0f172a) with Blue accents (#3b82f6)
- **Header:** "Welcome back,  [Mentor Name]"
- **Icons:** Lucide React icons throughout
- **Layout:** Fixed sidebar + scrollable content area
- **Responsive:** Works on desktop and tablet
  
---

## 📝 Dashboard  Structure

```
mentor-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.js          
│   │   └── Topbar.js           
│   ├── pages/
│   │   ├── Dashboard.js        
│   │   ├── ProjectWorkspace.js 
│   │   └── CommunicationSettings.js
│   ├── data/
│   │   └── data.js           
│   ├── App.js                  
│   ├── index.js               
│   └── index.css          
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 Start Date: December 2026
## ✅ Target Completion: February 2026

