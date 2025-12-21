import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, MessageSquare, Send } from 'lucide-react';
import './Overview.css';

const Overview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('overall');
  const [messages, setMessages] = React.useState(10);
  const [currentGroupIndex, setCurrentGroupIndex] = React.useState(0);

  const notificationTabs = ['overall', 'Level1', 'level2', 'level3', 'admin', 'coordinator'];

  const notifications = {
    overall: [
      { id: 1, title: 'progress updates', count: '30+' },
      { id: 2, title: 'pending report submission', count: '2+' },
      { id: 3, title: 'pending approval', count: '1' },
      { id: 4, title: 'meeting request', count: '3' },
      { id: 5, title: 'pending meeting', count: '2+' },
      { id: 6, title: 'announcement', count: '' },
    ],
    Level1: [
      { id: 1, title: 'Group L1 progress update', count: '' },
      { id: 2, title: 'Level 1 pending review', count: '1' },
    ],
    level2: [
      { id: 1, title: 'Code review pending', count: '2' },
      { id: 2, title: 'Submission review', count: '' },
    ],
    level3: [
      { id: 1, title: 'Final evaluation pending', count: '1' },
    ],
    admin: [
      { id: 1, title: 'System maintenance', count: '' },
    ],
    coordinator: [
      { id: 1, title: 'Coordination needed', count: '1' },
    ],
  };

  const projectGroups = [
    { id: 1, name: 'group 1', progress: 84, status: 'Completed' },
    { id: 2, name: 'group 2', progress: 92, status: 'Completed' },
    { id: 3, name: 'group 3', progress: 76, status: 'Active' },
    { id: 4, name: 'group 4', progress: 65, status: 'Active' },
  ];

  const groupProgress = [
    { name: 'cyan(Jan)', students: [
      { name: 'student 1', status: 'active 20min ago', progress: '8%' },
      { name: 'student 2', status: 'active now', progress: '100%' },
      { name: 'student 3', status: 'active hour age', progress: '99%' },
      { name: 'student 4', status: 'offline since 2h', progress: '76%' },
    ], workDone: true },
  ];

  return (
    <div className="overview">
      <div className="dashboard-header">
        <h1>supervisor dashboard</h1>
        <div className="welcome-section">
          <span>welcome again</span>
          <div className="profile-icon">👤</div>
        </div>
      </div>

      

      <div className="dashboard-container">
        {/* Left Section - Notifications */}
        <div className="left-section">
          <div className="notifications-card">
            <h2>Notifications</h2>
            
            {/* Tabs */}
            <div className="notification-tabs">
              {notificationTabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Notification Items */}
            <div className="notification-items">
              {notifications[activeTab]?.map((notif) => (
                <div key={notif.id} className="notification-row">
                  <div className="notif-title">{notif.title} {notif.count && <span className="count">{notif.count}</span>}</div>
                  <button className="read-btn">read</button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick cards positioned to middle-right of Notifications */}
          <div className="quick-cards">
            <div
              className="messages-card small"
              onClick={() => navigate('/dashboard/communication')}
              style={{ cursor: 'pointer' }}
            >
              <div className="messages-label">messages</div>
              <div className="messages-count">10 new messages from 3 groups</div>
              <ul className="messages-preview">
                <li>Group 1: New interim report uploaded</li>
                <li>Group 2: Code review scheduled</li>
                <li>Group 1: Meeting confirmed at 10:00</li>
                <li>Group 3: Documentation updated</li>
                <li>Group 2: Request for clarification</li>
                <li>Group 1: Final slides uploaded</li>
                <li>Group 3: Prototype demo ready</li>
                <li>Group 2: Bug reported in module X</li>
                <li>Group 1: Added project code link</li>
                <li>Group 3: Interim feedback received</li>
              </ul>
            </div>
            <div 
              className="meeting-card small"
              onClick={() => navigate('/dashboard/calendar')}
              style={{ cursor: 'pointer' }}
            >
              <div className="meeting-label">meeting time table</div>
              <div className="meeting-table">
                <div className="meeting-number">2</div>
                <div className="meeting-text">meetings<br/>today</div>
              </div>
            </div>

            <div 
              className="upcoming-event-card small"
              onClick={() => navigate('/dashboard/calendar')}
              style={{ cursor: 'pointer' }}
            >
              <h4>upcoming event</h4>
              <div className="upcoming-count">4 upcomming</div>
            </div>
          </div>

          {/* Create Announcement Box */}
          <div className="announcement-card">
            <h3>Create announcement</h3>
            <button className="create-btn">create</button>
          </div>

          {/* Message Box */}
          <div className="message-card">
            <div className="message-header">
              <h3>message box</h3>
              <span className="message-count">{messages}+messages</span>
            </div>
            <div className="message-actions">
              <button className="msg-btn">compose</button>
              <button className="msg-btn">reply</button>
              <button className="msg-btn">read</button>
            </div>
          </div>

          {/* Meeting Time Table */}
          {/* Meeting Time Table and Upcoming Event moved to top-middle */}
        </div>

        {/* Right Section - Project Groups */}
        <div className="right-section">
          <div className="groups-header">
            <h2>total groups 10...</h2>
          </div>

          {/* Group Tabs */}
          <div className="group-tabs">
            <button className="group-tab active">level1</button>
            <button className="group-tab">level2(3group)</button>
            <button className="group-tab">level3</button>
            <button className="group-tab">level4</button>
          </div>

          {/* Groups Grid */}
          <div className="groups-grid">
            {[projectGroups[currentGroupIndex]].map((group) => (
              <div key={group.id} className="group-card">
                <h4>{group.name}</h4>
                <div className="progress-circle">
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" className="progress-bg" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="progress-fill"
                      style={{
                        strokeDasharray: `${3.14 * 100 * (group.progress / 100)} 314`,
                      }}
                    />
                  </svg>
                  <div className="progress-text">
                    <span className="percentage">{group.progress}%</span>
                    <span className="status">Completed</span>
                  </div>
                </div>
                <div className="group-navigation">
                  <button 
                    className="view-all-btn"
                    onClick={() => setCurrentGroupIndex((currentGroupIndex - 1 + projectGroups.length) % projectGroups.length)}
                  >
                    previous
                  </button>
                  <button 
                    className="view-all-btn"
                    onClick={() => setCurrentGroupIndex((currentGroupIndex + 1) % projectGroups.length)}
                  >
                    next
                  </button>
                </div>
                <button 
                  className="view-full-detail-btn"
                  onClick={() => navigate(`/dashboard/group/${projectGroups[currentGroupIndex].id}`)}
                >
                  view full detail
                </button>
              </div>
            ))}
          </div>

          {/* Group Progress Details */}
          <div className="group-progress" onClick={() => navigate(`/dashboard/group/${projectGroups[currentGroupIndex].id}`)}>
            <h3>progress of {projectGroups[currentGroupIndex].name.replace('group ', '').toLowerCase()}</h3>
            <div className="progress-section-label">work done</div>
            <div className="progress-details">
              <span className="overall">overal <strong>+{projectGroups[currentGroupIndex].progress}%</strong></span>
              {groupProgress[0].students.map((student, idx) => (
                <div key={idx} className="student-item">
                  <span>{student.name}</span>
                  <span className="status">{student.status}</span>
                  <span className="progress">{student.progress}</span>
                </div>
              ))}
              <button className="view-progress-btn">view all progress</button>
            </div>
          </div>

          {/* Report Section */}
          <div className="report-card" onClick={() => navigate(`/dashboard/group/${projectGroups[currentGroupIndex].id}`)}>
            <h3>report {projectGroups[currentGroupIndex].name.replace('group ', '').toLowerCase()}</h3>
            <p className="report-subtitle">+33% overall project</p>
            <button className="report-btn">see report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
