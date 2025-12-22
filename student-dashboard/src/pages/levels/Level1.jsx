import { useState } from "react";

const level1Projects = [
  { name: "AI-Based Chatbot" },
  { name: "Mobile Learning App" },
  { name: "Smart Attendance System" },
];

const level1Sections = [
  {
    title: "Group Formation",
    guidelines: "Form groups of 3–4 students. Register via portal.",
    timePeriod: "Week 1 – Week 2",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-15",
  },
  {
    title: "Proposal",
    guidelines: "Submit concise proposal with objectives, scope, and timeline.",
    timePeriod: "Week 3 – Week 4",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-29",
  },
  {
    title: "Interim",
    guidelines: "Provide interim report with progress summary and risks.",
    timePeriod: "Week 6 – Week 7",
    docLink: "#",
    presLink: "#",
    deadline: "2026-02-26",
  },
  {
    title: "Final Evaluation",
    guidelines: "Submit final report and present demo.",
    timePeriod: "Week 10 – Week 12",
    docLink: "#",
    presLink: "#",
    deadline: "2026-03-26",
  },
];

export default function Level1() {
  const [selectedProject, setSelectedProject] = useState(level1Projects[0].name);

  return (
    <div className="academic-dashboard">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="brand">Level 1 Dashboard</div>
        <div className="project-select">
          <label>Project:</label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            {level1Projects.map((p, i) => (
              <option key={i} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
      </nav>

      {/* Top summary cards */}
      <div className="top-summary-cards">
        <div className="summary-card"><h4>Project Progress</h4><div className="value">75%</div><small>Overall completion</small></div>
        <div className="summary-card"><h4>Tasks</h4><div className="value">12</div><small>Pending tasks</small></div>
        <div className="summary-card"><h4>Group</h4><div className="value">4</div><small>Members</small></div>
        <div className="summary-card"><h4>Messages</h4><div className="value">3</div><small>Unread</small></div>
      </div>

      {/* Milestones grid */}
      <div className="sections-grid">
        {level1Sections.map((section, idx) => (
          <div key={idx} className="section-card">
            <h3>{section.title}</h3>
            <p className="guidelines">{section.guidelines}</p>
            <p><strong>Time period:</strong> {section.timePeriod}</p>
            <p><strong>Deadline:</strong> {section.deadline}</p>
            <div className="links">
              <a className="btn" href={section.docLink}>Submit document</a>
              <a className="btn" href={section.presLink}>Submit presentation</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
