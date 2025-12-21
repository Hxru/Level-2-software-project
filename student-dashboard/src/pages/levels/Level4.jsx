 import { useState } from "react";

const level4Projects = [
  { name: "Capstone: Enterprise ERP" },
  { name: "Capstone: AI Research Prototype" },
  { name: "Capstone: FinTech Platform" },
];

const level4Sections = [
  {
    title: "Group Formation",
    guidelines: "Capstone teams of 4–6. Assign responsibilities and set governance rules.",
    timePeriod: "Week 1 – Week 2",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-08",
  },
  {
    title: "Proposal",
    guidelines: "Detailed proposal with research validation, architecture, milestones, and ethics checklist.",
    timePeriod: "Week 3 – Week 4",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-26",
  },
  {
    title: "Interim",
    guidelines: "Interim: results so far, integration status, quality metrics, and refined roadmap.",
    timePeriod: "Week 6 – Week 7",
    docLink: "#",
    presLink: "#",
    deadline: "2026-02-22",
  },
  {
    title: "Final Evaluation",
    guidelines: "Final: production-grade demo, documentation, presentation deck, and deployment notes.",
    timePeriod: "Week 10 – Week 12",
    docLink: "#",
    presLink: "#",
    deadline: "2026-03-22",
  },
];

export default function Level4() {
  const [selectedProject, setSelectedProject] = useState(level4Projects[0].name);

  return (
    <div className="academic-dashboard">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="brand">Level 4 Dashboard</div>
        <div className="project-select">
          <label>Project:</label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            {level4Projects.map((p, i) => (
              <option key={i} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
      </nav>

      {/* Top summary cards */}
      <div className="top-summary-cards">
        <div className="summary-card"><h4>Project Progress</h4><div className="value">40%</div><small>Overall completion</small></div>
        <div className="summary-card"><h4>Tasks</h4><div className="value">15</div><small>Pending tasks</small></div>
        <div className="summary-card"><h4>Group</h4><div className="value">6</div><small>Members</small></div>
        <div className="summary-card"><h4>Messages</h4><div className="value">5</div><small>Unread</small></div>
      </div>

      {/* Milestones grid */}
      <div className="sections-grid">
        {level4Sections.map((section, idx) => (
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
