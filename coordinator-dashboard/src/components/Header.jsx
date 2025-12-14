import { useAuth } from '../context/AuthContext';
import { Bell, LogOut, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="page-title">Dashboard</h1>
        </div>

        <div className="header-right">
          <span className="welcome-text">Welcome back, Coordinator</span>
          <div className="user-avatar-circle">C</div>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
