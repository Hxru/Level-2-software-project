import { useState } from 'react';
import { Search, Mail, UserPlus, Edit, Trash2 } from 'lucide-react';
import './Users.css';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@university.edu',
      role: 'student',
      group: 'Group A',
      status: 'active',
    },
    {
      id: 2,
      name: 'Dr. Smith',
      email: 'smith@university.edu',
      role: 'supervisor',
      group: 'N/A',
      status: 'active',
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane.smith@university.edu',
      role: 'student',
      group: 'Group B',
      status: 'active',
    },
    {
      id: 4,
      name: 'Mike Wilson',
      email: 'mike.wilson@university.edu',
      role: 'student',
      group: 'Group C',
      status: 'active',
    },
    {
      id: 5,
      name: 'Dr. Johnson',
      email: 'johnson@university.edu',
      role: 'supervisor',
      group: 'N/A',
      status: 'active',
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="users-page">
      <div className="page-header">
        <div>
          <h2>User Management</h2>
          <p>Manage students, supervisors, and group leaders</p>
        </div>
        <button className="add-user-btn">
          <UserPlus size={20} />
          Add User
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

        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="student">Students</option>
          <option value="supervisor">Supervisors</option>
          <option value="group-leader">Group Leaders</option>
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
                  <span className={`role-badge ${user.role}`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('-', ' ')}
                  </span>
                </td>
                <td>{user.group}</td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
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

      {filteredUsers.length === 0 && (
        <div className="no-results">
          <p>No users found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Users;
