import { useState } from 'react';
import { Search, Plus, Users, FileText, Calendar } from 'lucide-react';
import './ProjectGroups.css';

const ProjectGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const groups = [
    {
      id: 1,
      name: 'IoT Smart Home',
      members: 4,
      leader: 'John Doe',
      supervisor: 'Dr. Smith',
      status: 'Active',
      progress: 75,
      created: '2025-09-01',
    },
    {
      id: 2,
      name: 'AI Chatbot System',
      members: 5,
      leader: 'Jane Smith',
      supervisor: 'Dr. Johnson',
      status: 'Active',
      progress: 60,
      created: '2025-09-01',
    },
    {
      id: 3,
      name: 'Web App Platform',
      members: 4,
      leader: 'Mike Wilson',
      supervisor: 'Dr. Williams',
      status: 'Active',
      progress: 45,
      created: '2025-09-01',
    },
    {
      id: 4,
      name: 'Mobile Learning App',
      members: 3,
      leader: 'Sarah Johnson',
      supervisor: 'Dr. Brown',
      status: 'Pending',
      progress: 30,
      created: '2025-09-05',
    },
  ];

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-groups-page">
      <div className="page-header">
        <div>
          <h2>Project Groups</h2>
          <p>Manage all student project groups</p>
        </div>
        <button className="add-group-btn">
          <Plus size={20} />
          Create New Group
        </button>
      </div>

      {/* Search */}
      <div className="search-bar">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search project groups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Groups Grid */}
      <div className="groups-grid">
        {filteredGroups.map((group) => (
          <div key={group.id} className="group-card">
            <div className="group-card-header">
              <h3>{group.name}</h3>
              <span className={`status-badge ${group.status.toLowerCase()}`}>
                {group.status}
              </span>
            </div>

            <div className="group-info">
              <div className="info-item">
                <Users size={18} />
                <span>{group.members} members</span>
              </div>
              <div className="info-item">
                <FileText size={18} />
                <span>Leader: {group.leader}</span>
              </div>
              <div className="info-item">
                <Calendar size={18} />
                <span>Supervisor: {group.supervisor}</span>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-header">
                <span>Progress</span>
                <span>{group.progress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${group.progress}%` }}
                />
              </div>
            </div>

            <div className="group-actions">
              <button className="action-btn primary">View Details</button>
              <button className="action-btn secondary">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGroups;
