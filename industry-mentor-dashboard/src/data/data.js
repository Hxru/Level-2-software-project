// data/data.js
// Sample data for projects, messages, and notifications
// In production, this would be replaced with API calls to a backend

/**
 * Projects Data
 * Contains all project information including:
 * - Basic info (title, group, supervisor, status, progress)
 * - Project description
 * - Team members
 * - Tasks with deadlines and progress
 * - Submitted files
 * - Feedback history
 */
export const projectsData = [
  {
    id: "p1",
    title: "Smart Campus Navigation",
    group: "Group A",
    supervisor: "Dr. Silva",
    progress: 62,
    status: "On Track",
    description: "A navigation system for campus buildings using indoor mapping and QR check-ins.",
    members: [
      { name: "Alice Fernando", role: "Leader", id: "s1" },
      { name: "Bob Silva", role: "Member", id: "s2" },
      { name: "Chamodi Perera", role: "Member", id: "s3" },
    ],
    tasks: [
      { 
        id: "t1", 
        name: "Requirements & Research", 
        assignedTo: "Alice Fernando", 
        deadline: "2026-01-15", 
        progress: 100, 
        status: "Completed" 
      },
      { 
        id: "t2", 
        name: "Map Integration", 
        assignedTo: "Bob Silva", 
        deadline: "2026-02-10", 
        progress: 40, 
        status: "In Progress" 
      },
      { 
        id: "t3", 
        name: "Testing & Fixes", 
        assignedTo: "Chamodi Perera", 
        deadline: "2026-03-02", 
        progress: 0, 
        status: "Not Started" 
      },
    ],
    files: [
      { 
        id: "f1", 
        name: "Requirements_Doc_v1.pdf", 
        uploadedBy: "Alice Fernando", 
        uploadedAt: "2025-12-03", 
        version: "v1", 
        status: "Submitted" 
      },
      { 
        id: "f2", 
        name: "Map_Integration_Notes.docx", 
        uploadedBy: "Bob Silva", 
        uploadedAt: "2026-01-20", 
        version: "v1", 
        status: "Submitted" 
      },
    ],
    feedback: [
      { 
        author: "Supervisor", 
        text: "Good start. Improve map accuracy.", 
        date: "2026-01-25", 
        id: "fb1" 
      },
      { 
        author: "Mentor", 
        text: "Consider offline caching for maps.", 
        date: "2026-02-02", 
        id: "fb2" 
      },
    ],
  },
  {
    id: "p2",
    title: "Attendance via Face Recognition",
    group: "Group C",
    supervisor: "Prof. Perera",
    progress: 28,
    status: "Delayed",
    description: "Automated attendance with face recognition and reports.",
    members: [
      { name: "Nimal Rajapaksa", role: "Leader", id: "s4" },
      { name: "Saman Kumara", role: "Member", id: "s5" }
    ],
    tasks: [
      { 
        id: "t4", 
        name: "Model Research", 
        assignedTo: "Nimal Rajapaksa", 
        deadline: "2025-12-10", 
        progress: 100, 
        status: "Completed" 
      },
      { 
        id: "t5", 
        name: "Prototype Development", 
        assignedTo: "Saman Kumara", 
        deadline: "2026-01-05", 
        progress: 10, 
        status: "Delayed" 
      },
      { 
        id: "t6", 
        name: "Testing Phase", 
        assignedTo: "Nimal Rajapaksa", 
        deadline: "2026-02-15", 
        progress: 0, 
        status: "Not Started" 
      },
    ],
    files: [
      { 
        id: "f3", 
        name: "Research_Report.pdf", 
        uploadedBy: "Nimal Rajapaksa", 
        uploadedAt: "2025-12-08", 
        version: "v1", 
        status: "Submitted" 
      },
    ],
    feedback: [
      { 
        author: "Supervisor", 
        text: "Need to accelerate prototype development.", 
        date: "2026-01-08", 
        id: "fb3" 
      },
    ],
  },
  {
    id: "p3",
    title: "Library Management System",
    group: "Group B",
    supervisor: "Dr. Gunasekara",
    progress: 85,
    status: "On Track",
    description: "Digital library system with book tracking and borrowing features.",
    members: [
      { name: "Dilini Silva", role: "Leader", id: "s6" },
      { name: "Kasun Perera", role: "Member", id: "s7" },
      { name: "Tharushi Fernando", role: "Member", id: "s8" },
    ],
    tasks: [
      { 
        id: "t7", 
        name: "Database Design", 
        assignedTo: "Kasun Perera", 
        deadline: "2025-12-20", 
        progress: 100, 
        status: "Completed" 
      },
      { 
        id: "t8", 
        name: "Frontend Development", 
        assignedTo: "Tharushi Fernando", 
        deadline: "2026-01-30", 
        progress: 90, 
        status: "In Progress" 
      },
      { 
        id: "t9", 
        name: "Backend Integration", 
        assignedTo: "Dilini Silva", 
        deadline: "2026-02-20", 
        progress: 70, 
        status: "In Progress" 
      },
    ],
    files: [
      { 
        id: "f4", 
        name: "Database_Schema.pdf", 
        uploadedBy: "Kasun Perera", 
        uploadedAt: "2025-12-18", 
        version: "v2", 
        status: "Submitted" 
      },
      { 
        id: "f5", 
        name: "UI_Mockups.fig", 
        uploadedBy: "Tharushi Fernando", 
        uploadedAt: "2026-01-10", 
        version: "v3", 
        status: "Submitted" 
      },
    ],
    feedback: [
      { 
        author: "Mentor", 
        text: "Excellent progress. Keep up the good work!", 
        date: "2026-01-15", 
        id: "fb4" 
      },
      { 
        author: "Supervisor", 
        text: "Frontend looks great. Focus on backend now.", 
        date: "2026-01-28", 
        id: "fb5" 
      },
    ],
  },
];

/**
 * Messages Data
 * Sample chat conversations with students and supervisors
 */
export const messagesData = [
  { 
    id: "m1", 
    with: "Alice Fernando (Group A)", 
    lastMessage: "Uploaded latest documentation.", 
    unread: 2, 
    avatar: "AF" 
  },
  { 
    id: "m2", 
    with: "Nimal Rajapaksa (Group C)", 
    lastMessage: "We have a delay in prototype.", 
    unread: 1, 
    avatar: "NR" 
  },
  { 
    id: "m3", 
    with: "Dr. Silva (Supervisor)", 
    lastMessage: "Meeting scheduled for tomorrow.", 
    unread: 0, 
    avatar: "DS" 
  },
  { 
    id: "m4", 
    with: "Dilini Silva (Group B)", 
    lastMessage: "Backend integration completed!", 
    unread: 0, 
    avatar: "DS" 
  },
];

/**
 * Notifications Data
 * System notifications about file uploads, delays, feedback, and deadlines
 */
export const notificationsData = [
  { 
    id: "n1", 
    text: "Map_Integration_Notes.docx uploaded by Group A", 
    date: "2 hours ago", 
    type: "file" 
  },
  { 
    id: "n2", 
    text: "Prototype task delayed in Group C", 
    date: "1 day ago", 
    type: "alert" 
  },
  { 
    id: "n3", 
    text: "New feedback from Dr. Silva on Group B project", 
    date: "2 days ago", 
    type: "feedback" 
  },
  { 
    id: "n4", 
    text: "Deadline approaching: Testing Phase - Group C", 
    date: "3 days ago", 
    type: "deadline" 
  },
  { 
    id: "n5", 
    text: "Database_Schema.pdf submitted by Group B", 
    date: "5 days ago", 
    type: "file" 
  },
];