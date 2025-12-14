import { useState } from 'react';
import { Search, Download, Eye, FileText, Upload } from 'lucide-react';
import './Submissions.css';

const Submissions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const submissions = [
    {
      id: 1,
      project: 'Web App',
      group: 'Group A',
      type: 'Final Presentation',
      submittedBy: 'John Doe',
      submittedDate: '2025-12-10 14:30',
      status: 'submitted',
      fileSize: '2.4 MB',
    },
    {
      id: 2,
      project: 'AI Chatbot',
      group: 'Group B',
      type: 'Mid-Term Report',
      submittedBy: 'Jane Smith',
      submittedDate: '2025-12-09 10:15',
      status: 'submitted',
      fileSize: '1.8 MB',
    },
    {
      id: 3,
      project: 'Mobile App',
      group: 'Group C',
      type: 'Proposal',
      submittedBy: 'Mike Wilson',
      submittedDate: '2025-12-08 16:45',
      status: 'reviewed',
      fileSize: '1.2 MB',
    },
    {
      id: 4,
      project: 'Data Analytics',
      group: 'Group D',
      type: 'Progress Report',
      submittedBy: 'Sarah Johnson',
      submittedDate: '2025-12-07 09:20',
      status: 'reviewed',
      fileSize: '3.1 MB',
    },
  ];

  const filteredSubmissions = submissions.filter(
    (sub) =>
      sub.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="submissions-page">
      <div className="page-header">
        <div>
          <h2>Submissions</h2>
          <p>Review and manage student submissions</p>
        </div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search submissions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Submissions Table */}
      <div className="submissions-table-container">
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Group</th>
              <th>Type</th>
              <th>Submitted By</th>
              <th>Date & Time</th>
              <th>File Size</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission) => (
              <tr key={submission.id}>
                <td>
                  <div className="project-cell">
                    <FileText size={20} color="#667eea" />
                    <strong>{submission.project}</strong>
                  </div>
                </td>
                <td>{submission.group}</td>
                <td>{submission.type}</td>
                <td>{submission.submittedBy}</td>
                <td>{submission.submittedDate}</td>
                <td>{submission.fileSize}</td>
                <td>
                  <span className={`status-badge ${submission.status}`}>
                    {submission.status.charAt(0).toUpperCase() +
                      submission.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn download" title="Download">
                      <Download size={16} />
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

export default Submissions;
