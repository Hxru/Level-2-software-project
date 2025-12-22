 import { useState } from "react";

const level3Projects = [
  { name: "Data Analytics Dashboard" },
  { name: "IoT Device Monitor" },
  { name: "E-Commerce Platform" },
];

const level3Sections = [
  {
    title: "Group Formation",
    guidelines: "Groups of 4–5 recommended. Define milestones and communication cadence.",
    timePeriod: "Week 1 – Week 2",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-10",
  },
  {
    title: "Proposal",
    guidelines: "Submit proposal with architecture diagram, data model, and KPIs.",
    timePeriod: "Week 3 – Week 4",
    docLink: "#",
    presLink: "#",
    deadline: "2026-01-27",
  },
  {
    title: "Interim",
    guidelines: "Interim deliverables: working modules demo, backlog status, risk updates.",
    timePeriod: "Week 6 – Week 7",
    docLink: "#",
    presLink: "#",
    deadline: "2026-02-23",
  },
  {
    title: "Final Evaluation",
    guidelines: "Final demo with performance metrics, documentation, and presentation.",
    timePeriod: "Week 10 – Week 12",
    docLink: "#",
    presLink: "#",
    deadline: "2026-03-23",
  },
];

export default function Level3() {
  const [selectedProject, setSelectedProject] = useState(level3Projects[0].name);

  return (
    <div className="academic-dashboard">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="brand">Level 3 Dashboard</div>
        <div className="project-select">
          <label>Project:</label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            {level3Projects.map((p, i) => (
              <option key={i} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
      </nav>

      {/* Top summary cards */}
      <div className="top-summary-cards">
        <div className="summary-card"><h4>Project Progress</h4><div className="value">50%</div><small>Overall completion</small></div>
        <div className="summary-card"><h4>Tasks</h4><div className="value">10</div><small>Pending tasks</small></div>
        <div className="summary-card"><h4>Group</h4><div className="value">5</div><small>Members</small></div>
        <div className="summary-card"><h4>Messages</h4><div className="value">4</div><small>Unread</small></div>
      </div>

      {/* Milestones grid */}
      <div className="sections-grid">
        {level3Sections.map((section, idx) => (
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
