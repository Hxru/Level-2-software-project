import { useState } from 'react';
import { Search, Filter, Eye, Download, CheckCircle, XCircle } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Based Chatbot System',
      group: 'Group A',
      leader: 'John Doe',
      supervisor: 'Dr. Smith',
      status: 'In Progress',
      progress: 75,
      startDate: '2025-09-01',
      deadline: '2025-12-20',
      members: 4,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      group: 'Group B',
      leader: 'Jane Smith',
      supervisor: 'Dr. Johnson',
      status: 'Under Review',
      progress: 90,
      startDate: '2025-09-01',
      deadline: '2025-12-20',
      members: 5,
    },
    {
      id: 3,
      title: 'Mobile Learning Application',
      group: 'Group C',
      leader: 'Mike Wilson',
      supervisor: 'Dr. Williams',
      status: 'In Progress',
      progress: 60,
      startDate: '2025-09-01',
      deadline: '2025-12-20',
      members: 4,
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      group: 'Group D',
      leader: 'Sarah Johnson',
      supervisor: 'Dr. Brown',
      status: 'Pending Approval',
      progress: 45,
      startDate: '2025-09-01',
      deadline: '2025-12-20',
      members: 3,
    },
    {
      id: 5,
      title: 'Healthcare Management System',
      group: 'Group E',
      leader: 'David Lee',
      supervisor: 'Dr. Davis',
      status: 'Approved',
      progress: 30,
      startDate: '2025-09-01',
      deadline: '2025-12-20',
      members: 5,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.group.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'all' ||
      project.status.toLowerCase().replace(' ', '-') === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="projects-page">
      <div className="page-header">
        <h2>Project Management</h2>
        <p>Monitor and manage all project groups</p>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <Filter size={20} />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="in-progress">In Progress</option>
            <option value="under-review">Under Review</option>
            <option value="pending-approval">Pending Approval</option>
            <option value="approved">Approved</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="projects-table-container">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Group</th>
              <th>Leader</th>
              <th>Supervisor</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id}>
                <td>
                  <div className="project-title-cell">
                    <strong>{project.title}</strong>
                    <span>{project.members} members</span>
                  </div>
                </td>
                <td>{project.group}</td>
                <td>{project.leader}</td>
                <td>{project.supervisor}</td>
                <td>
                  <div className="progress-cell">
                    <div className="progress-bar-small">
                      <div
                        className="progress-fill-small"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span>{project.progress}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </td>
                <td>{new Date(project.deadline).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view" title="View Details">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn download" title="Download Files">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
