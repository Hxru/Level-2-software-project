import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users as UsersGroup,
  FolderOpen,
  ClipboardCheck,
  UserCog,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/dashboard/project-groups', icon: UsersGroup, label: 'Project Groups' },
    { path: '/dashboard/submissions', icon: FolderOpen, label: 'Submissions' },
    { path: '/dashboard/evaluation', icon: ClipboardCheck, label: 'Evaluation' },
    { path: '/dashboard/user-management', icon: UserCog, label: 'User Management' },
    { path: '/dashboard/communication', icon: MessageSquare, label: 'Communication' },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">E</div>
          {!collapsed && <span className="logo-text">EduSync</span>}
        </div>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon size={22} />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
