 import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [openLevel, setOpenLevel] = useState(false);
  const location = useLocation();

  const toggleLevel = () => setOpenLevel(!openLevel);
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">E</span>
        <span className="logo-text">EduSync</span>
      </div>

      {/* Menu */}
      <ul className="menu">
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>

        <li className="dropdown" onClick={toggleLevel}>
          <span>Academic Level ▾</span>
          {openLevel && (
            <ul className="sub-menu">
              <li className={isActive("/level1") ? "active" : ""}>
                <Link to="/level1">Level 1</Link>
              </li>
              <li className={isActive("/level2") ? "active" : ""}>
                <Link to="/level2">Level 2</Link>
              </li>
              <li className={isActive("/level3") ? "active" : ""}>
                <Link to="/level3">Level 3</Link>
              </li>
              <li className={isActive("/level4") ? "active" : ""}>
                <Link to="/level4">Level 4</Link>
              </li>
            </ul>
          )}
        </li>

        <li className={isActive("/calendar") ? "active" : ""}>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className={isActive("/communication") ? "active" : ""}>
          <Link to="/communication">Communication</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

