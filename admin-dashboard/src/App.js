import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import { Home, Users, Layers, Shield, FileText, Database, Search, ChevronDown, User } from 'lucide-react';

function App() {
  const loginData = [
    { day: 'Mon', value: 45 },
    { day: 'Tu', value: 52 },
    { day: 'Wed', value: 48 },
    { day: 'Thu', value: 65 },
    { day: 'Fr', value: 58 },
    { day: 'Sat', value: 42 },
    { day: 'Sun', value: 38 }
  ];

  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: 0
  };

  const sidebarStyle = {
    width: '240px',
    background: '#E5E8ED',
    color: '#1f2937',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '24px 16px',
    backgroundColor: '#31517B',
    height: '80px',
    flexShrink: 0
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#E5E8ED',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#3d5a80',
    fontSize: '10px',
    position: 'relative'
  };

  const sidebarNavStyle = {
    padding: '24px 16px',
    flex: 1
  };

  const navItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '4px',
    transition: 'background-color 0.2s',
    color: '#1f2937'
  };

  const navItemActiveStyle = {
    ...navItemStyle,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    color: '#2563eb'
  };

  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  };

  const headerStyle = {
    background: '#31517B',
    color: 'white',
    padding: '24px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    flexShrink: 0
  };

  const contentAreaStyle = {
    padding: '24px',
    overflowY: 'auto'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '24px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  };

  const twoColGridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
    marginBottom: '24px'
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#f9fafb',
    padding: '10px 16px',
    borderRadius: '8px',
    width: '320px'
  };

  const inputStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    flex: 1,
    fontSize: '14px',
    fontFamily: 'inherit'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  };

  const thStyle = {
    textAlign: 'left',
    padding: '12px 8px',
    fontWeight: '600',
    fontSize: '14px',
    borderBottom: '2px solid #e5e7eb',
    color: '#374151'
  };

  const tdStyle = {
    padding: '16px 8px',
    fontSize: '14px',
    borderBottom: '1px solid #f3f4f6',
    color: '#1f2937'
  };

  const progressBarContainerStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: '#e5e7eb',
    borderRadius: '999px',
    overflow: 'hidden'
  };

  const progressBarFillStyle = {
    width: '72%',
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: '999px'
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={logoContainerStyle}>
          <div style={logoStyle}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="24" fill="#E5E8ED"/>
              <text x="25" y="18" textAnchor="middle" style={{ fontSize: '11px', fontWeight: 'bold', fill: '#3d5a80' }}>Edu</text>
              <text x="25" y="32" textAnchor="middle" style={{ fontSize: '11px', fontWeight: 'bold', fill: '#3d5a80' }}>Sync</text>
            </svg>
          </div>
        </div>

        <div style={sidebarNavStyle}>
          <div style={navItemActiveStyle}>
            <Home size={20} />
            <span>Dashboard</span>
          </div>
          <div style={navItemStyle}>
            <Users size={20} />
            <span>Users</span>
          </div>
          <div style={navItemStyle}>
            <Layers size={20} />
            <span>Roles</span>
          </div>
          <div style={navItemStyle}>
            <Shield size={20} />
            <span>Security</span>
          </div>
          <div style={navItemStyle}>
            <FileText size={20} />
            <span>Logs</span>
          </div>
          <div style={navItemStyle}>
            <Database size={20} />
            <span>Backups</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '16px' }}>Welcome back, Kamal</span>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#e5e7eb', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={28} color="#6b7280" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={contentAreaStyle}>
          {/* Stats Cards */}
          <div style={statsGridStyle}>
            <div style={cardStyle}>
              <div style={{ color: '#6b7280', fontSize: '13px', marginBottom: '8px' }}>Total Users</div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#111827' }}>1,246</div>
            </div>
            <div style={cardStyle}>
              <div style={{ color: '#6b7280', fontSize: '13px', marginBottom: '8px' }}>Active Today</div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#111827' }}>120</div>
            </div>
            <div style={cardStyle}>
              <div style={{ color: '#6b7280', fontSize: '13px', marginBottom: '8px' }}>Pending Approvals</div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#111827' }}>5</div>
            </div>
            <div style={cardStyle}>
              <div style={{ color: '#6b7280', fontSize: '13px', marginBottom: '8px' }}>Warnings</div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#111827' }}>2</div>
            </div>
          </div>

          {/* User Management and Security */}
          <div style={twoColGridStyle}>
            {/* User Management */}
            <div style={cardStyle}>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px' }}>User Management</h2>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={searchContainerStyle}>
                  <Search size={18} style={{ color: '#9ca3af' }} />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#6b7280' }}>
                  <span style={{ fontSize: '14px' }}>Filter</span>
                  <ChevronDown size={18} />
                </div>
              </div>

              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Role</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>Nimal</td>
                    <td style={tdStyle}>Nimalsas.23@uom.lk</td>
                    <td style={tdStyle}>Admin</td>
                    <td style={{ ...tdStyle, color: '#10b981', fontWeight: '500' }}>Active</td>
                    <td style={tdStyle}>10-12-2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Security */}
            <div style={cardStyle}>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px' }}>Security</h2>
              
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginTop: 0, marginBottom: '12px', color: '#374151' }}>Login Activity</h3>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={loginData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      interval={0}
                      padding={{ left: 10, right: 10 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginTop: 0, marginBottom: '12px', color: '#374151' }}>Failed Login Attempts</h3>
                <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#111827' }}>3</div>
              </div>
            </div>
          </div>

          {/* System Activity Logs and Backup */}
          <div style={twoColGridStyle}>
            {/* System Activity Logs */}
            <div style={cardStyle}>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px' }}>System Activity Logs</h2>
              
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Timestamp</th>
                    <th style={thStyle}>Action</th>
                    <th style={thStyle}>Performed by</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>10-12-2025  10:35</td>
                    <td style={tdStyle}>Deleted User nimalsas.23</td>
                    <td style={tdStyle}>kamalkp.23</td>
                    <td style={{ ...tdStyle, color: '#10b981', fontWeight: '500' }}>Success</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>09-12-2025  23:12</td>
                    <td style={tdStyle}>Updated Password</td>
                    <td style={tdStyle}>tharakajv.22</td>
                    <td style={{ ...tdStyle, color: '#ef4444', fontWeight: '500' }}>Failed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Backup & Storage */}
            <div style={cardStyle}>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px' }}>Backup & Storage</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#6b7280' }}>Last backup</span>
                  <span style={{ fontWeight: '600', color: '#111827' }}>12-12-2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#6b7280' }}>Next backup</span>
                  <span style={{ fontWeight: '600', color: '#111827' }}>07-03-2026</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#6b7280' }}>Status</span>
                  <span style={{ fontWeight: '600', color: '#10b981' }}>Success</span>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Storage Usage</span>
                    <span style={{ fontWeight: '600', color: '#111827' }}>72%</span>
                  </div>
                  <div style={progressBarContainerStyle}>
                    <div style={progressBarFillStyle}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;