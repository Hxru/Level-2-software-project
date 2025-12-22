import { useState } from "react";

const level2Projects = [
  { name: "E-Commerce Platform" },
  { name: "Healthcare Appointment System" },
  { name: "AI-Based Chatbot" },
];

const level2Sections = [
  {
    title: "Group Formation",
    guidelines: "Confirm group of 3–5. Assign roles and set up repo/workspace.",
    timePeriod: "Week 1 – Week 2",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-12",
  },
  {
    title: "Proposal",
    guidelines: "Submit proposal with problem statement, solution design, tech stack.",
    timePeriod: "Week 3 – Week 4",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-28",
  },
  {
    title: "Interim",
    guidelines: "Interim report should include prototype screenshots and test plan draft.",
    timePeriod: "Week 6 – Week 7",
    docLink: "#",
    presLink: "#",
    deadline: "2026-02-24",
  },
  {
    title: "Final Evaluation",
    guidelines: "Deliver MVP demo, final report, and presentation.",
    timePeriod: "Week 10 – Week 12",
    docLink: "#",
    presLink: "#",
    deadline: "2026-03-24",
  },
];

export default function Level2() {
  const [selectedProject, setSelectedProject] = useState(level2Projects[0].name);

  return (
    <div className="academic-dashboard">
      <nav className="navbar">
        <div className="brand">Level 2 Dashboard</div>
        <div className="project-select">
          <label>Project:</label>
          <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
            {level2Projects.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
          </select>
        </div>
      </nav>

      <div className="top-summary-cards">
        <div className="summary-card"><h4>Project Progress</h4><div className="value">60%</div><small>Overall completion</small></div>
        <div className="summary-card"><h4>Tasks</h4><div className="value">8</div><small>Pending tasks</small></div>
        <div className="summary-card"><h4>Group</h4><div className="value">5</div><small>Members</small></div>
        <div className="summary-card"><h4>Messages</h4><div className="value">2</div><small>Unread</small></div>
      </div>

      <div className="sections-grid">
        {level2Sections.map((section, idx) => (
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
