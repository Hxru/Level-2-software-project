import { useState } from 'react';
import { Search, UserPlus, Mail, Edit, Trash2, Shield } from 'lucide-react';
import './UserManagement.css';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      email: 'ahmed.hassan@university.edu',
      role: 'Group Leader',
      group: 'Group A',
      status: 'active',
      joinedDate: '2025-09-01',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@university.edu',
      role: 'Student',
      group: 'Group A',
      status: 'active',
      joinedDate: '2025-09-01',
    },
    {
      id: 3,
      name: 'Dr. Smith',
      email: 'dr.smith@university.edu',
      role: 'Supervisor',
      group: 'N/A',
      status: 'active',
      joinedDate: '2025-08-15',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@university.edu',
      role: 'Group Leader',
      group: 'Group B',
      status: 'active',
      joinedDate: '2025-09-01',
    },
    {
      id: 5,
      name: 'Mike Wilson',
      email: 'mike.wilson@university.edu',
      role: 'Student',
      group: 'Group C',
      status: 'active',
      joinedDate: '2025-09-02',
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      roleFilter === 'all' ||
      user.role.toLowerCase().replace(' ', '-') === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="user-management-page">
      <div className="page-header">
        <div>
          <h2>User Management</h2>
          <p>Manage users, roles & permissions</p>
        </div>
        <button className="add-user-btn">
          <UserPlus size={20} />
          Add New User
        </button>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="student">Students</option>
          <option value="group-leader">Group Leaders</option>
          <option value="supervisor">Supervisors</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Group</th>
              <th>Status</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-name-cell">
                    <div className="user-avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <strong>{user.name}</strong>
                  </div>
                </td>
                <td>
                  <a href={`mailto:${user.email}`} className="email-link">
                    {user.email}
                  </a>
                </td>
                <td>
                  <span
                    className={`role-badge ${user.role
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td>{user.group}</td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td>{new Date(user.joinedDate).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn message" title="Send Message">
                      <Mail size={16} />
                    </button>
                    <button className="action-btn edit" title="Edit User">
                      <Edit size={16} />
                    </button>
                    <button className="action-btn delete" title="Delete User">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
