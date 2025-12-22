import { Save, Bell, Lock, Database, Mail, User } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="page-header">
        <h2>Settings</h2>
        <p>Manage your preferences and system configuration</p>
      </div>

      <div className="settings-grid">
        {/* Profile Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <User size={20} />
            <h3>Profile Settings</h3>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Dr. Coordinator" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" defaultValue="coordinator@university.edu" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" defaultValue="+1 234 567 8900" />
            </div>
            <button className="save-btn">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Bell size={20} />
            <h3>Notification Preferences</h3>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div>
                <h4>Email Notifications</h4>
                <p>Receive email updates for important events</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div>
                <h4>Project Updates</h4>
                <p>Get notified about project submissions</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div>
                <h4>Evaluation Reminders</h4>
                <p>Reminders for pending evaluations</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Lock size={20} />
            <h3>Security</h3>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" placeholder="Enter current password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm new password" />
            </div>
            <button className="save-btn">
              <Lock size={18} />
              Update Password
            </button>
          </div>
        </div>

        {/* System Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Database size={20} />
            <h3>System Preferences</h3>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div>
                <h4>Auto-Save</h4>
                <p>Automatically save draft evaluations</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div>
                <h4>Data Backup</h4>
                <p>Automatic backup every 24 hours</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="form-group">
              <label>Items Per Page</label>
              <select defaultValue="20">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
