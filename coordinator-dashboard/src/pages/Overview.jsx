import {
  Users,
  FolderKanban,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import './Overview.css';

const Overview = () => {
  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+3 this month',
      icon: FolderKanban,
      color: '#667eea',
    },
    {
      title: 'Active Students',
      value: '120',
      change: '+8 new',
      icon: Users,
      color: '#48bb78',
    },
    {
      title: 'Pending Evaluations',
      value: '8',
      change: '3 due soon',
      icon: AlertCircle,
      color: '#f6ad55',
    },
    {
      title: 'Completed Projects',
      value: '16',
      change: '67% completion',
      icon: CheckCircle,
      color: '#38b2ac',
    },
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'AI-Based Chatbot',
      group: 'Group A',
      supervisor: 'Dr. Smith',
      status: 'In Progress',
      progress: 75,
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      group: 'Group B',
      supervisor: 'Dr. Johnson',
      status: 'Under Review',
      progress: 90,
    },
    {
      id: 3,
      name: 'Mobile Learning App',
      group: 'Group C',
      supervisor: 'Dr. Williams',
      status: 'In Progress',
      progress: 60,
    },
    {
      id: 4,
      name: 'Data Analytics Dashboard',
      group: 'Group D',
      supervisor: 'Dr. Brown',
      status: 'Pending Approval',
      progress: 45,
    },
  ];

  const upcomingDeadlines = [
    { task: 'Project Proposal Review', date: '2025-12-15', group: 'Group E' },
    { task: 'Mid-Term Evaluation', date: '2025-12-18', group: 'Group F' },
    { task: 'Final Submission', date: '2025-12-20', group: 'Group G' },
  ];

  return (
    <div className="overview">
      <div className="page-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: `${stat.color}20` }}>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Recent Projects */}
        <div className="card">
          <div className="card-header">
            <h3>
              <TrendingUp size={20} />
              Recent Projects
            </h3>
          </div>
          <div className="projects-list">
            {recentProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <h4>{project.name}</h4>
                  <p>
                    {project.group} • {project.supervisor}
                  </p>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="card">
          <div className="card-header">
            <h3>
              <Calendar size={20} />
              Upcoming Deadlines
            </h3>
          </div>
          <div className="deadlines-list">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="deadline-item">
                <div className="deadline-date">
                  <span className="day">
                    {new Date(deadline.date).getDate()}
                  </span>
                  <span className="month">
                    {new Date(deadline.date).toLocaleString('default', {
                      month: 'short',
                    })}
                  </span>
                </div>
                <div className="deadline-info">
                  <h4>{deadline.task}</h4>
                  <p>{deadline.group}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
