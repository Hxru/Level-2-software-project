const projects = [
  {
    title: "AI-Based Chatbot",
    group: "Group A",
    supervisor: "Dr. Smith",
    status: "In Progress",
    completion: 75,
  },
  {
    title: "E-Commerce Platform",
    group: "Group B",
    supervisor: "Dr. Johnson",
    status: "Under Review",
    completion: 90,
  },
  {
    title: "Mobile Learning App",
    group: "Group C",
    supervisor: "Dr. Williams",
    status: "In Progress",
    completion: 60,
  },
];

function RecentProjects() {
  return (
    <div className="recent-projects">
      <h3>Recent Projects</h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-top">
              <div className="project-title">{project.title}</div>
              <span className={`status-badge ${project.status.replace(" ", "-").toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <div className="project-meta">
              {project.group} • {project.supervisor}
            </div>
            <div className="progress-wrapper">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${project.completion}%` }}
                ></div>
              </div>
              <div className="progress-label">{project.completion}% Complete</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
