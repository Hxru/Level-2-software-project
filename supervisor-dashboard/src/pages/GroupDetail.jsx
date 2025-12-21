import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './GroupDetail.css';

const GroupDetail = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  // Mock data for groups
  const groupsData = {
    1: {
      name: 'Group 1',
      companyName: 'Tech Solutions Inc.',
      projectTitle: 'AI-Powered Student Learning Analytics Platform',
      projectIntroduction: 'A comprehensive platform that uses machine learning to analyze student learning patterns and provide personalized recommendations to improve academic performance.',
      supervisors: ['Dr. Ahmed Hassan', 'Prof. Fatima Khan'],
      members: [
        { 
          id: 1, 
          name: 'Uditha', 
          progress: 95,
          proposal: 9.5,
          interim: 9.2,
          codeReview: 8.8,
          evaluation: 0,
          overall: 9.2
        },
        { 
          id: 2, 
          name: 'Janaka', 
          progress: 92,
          proposal: 9.0,
          interim: 9.0,
          codeReview: 8.5,
          evaluation: 0,
          overall: 8.8
        },
        { 
          id: 3, 
          name: 'Hiruni', 
          progress: 88,
          proposal: 8.8,
          interim: 8.7,
          codeReview: 8.2,
          evaluation: 0,
          overall: 8.6
        },
        { 
          id: 4, 
          name: 'Shashini', 
          progress: 90,
          proposal: 9.2,
          interim: 8.9,
          codeReview: 8.4,
          evaluation: 0,
          overall: 8.8
        },
        { 
          id: 5, 
          name: 'Medini', 
          progress: 87,
          proposal: 8.7,
          interim: 8.5,
          codeReview: 8.0,
          evaluation: 0,
          overall: 8.4
        },
      ],
      overallProgress: 84,
      projectStages: [
        { stage: 'Proposal', status: 'Completed', percentage: 100, date: 'Dec 5, 2025' },
        { stage: 'Interim', status: 'Completed', percentage: 100, date: 'Dec 12, 2025' },
        { stage: 'Code Review', status: 'In Progress', percentage: 75, date: 'Dec 18-20, 2025' },
        { stage: 'Evaluation', status: 'Pending', percentage: 0, date: 'Jan 2, 2026' },
      ],
      report: {
        quality: 8.5,
        innovation: 9.0,
        teamwork: 8.8,
        documentation: 8.2,
        overallMarks: 8.6,
      },
    },
    2: {
      name: 'Group 2',
      companyName: 'Digital Innovations Ltd.',
      projectTitle: 'Real-Time Collaborative Code Review and Debugging Tool',
      projectIntroduction: 'An innovative web-based platform enabling real-time collaboration for code review with integrated debugging tools and instant feedback mechanisms for development teams.',
      supervisors: ['Dr. Mohammad Ali', 'Prof. Zainab Hassan'],
      members: [
        { 
          id: 1, 
          name: 'Uditha', 
          progress: 92,
          proposal: 9.2,
          interim: 9.0,
          codeReview: 9.2,
          evaluation: 0,
          overall: 9.1
        },
        { 
          id: 2, 
          name: 'Janaka', 
          progress: 89,
          proposal: 8.9,
          interim: 8.8,
          codeReview: 8.9,
          evaluation: 0,
          overall: 8.9
        },
        { 
          id: 3, 
          name: 'Hiruni', 
          progress: 91,
          proposal: 9.1,
          interim: 9.0,
          codeReview: 9.1,
          evaluation: 0,
          overall: 9.1
        },
        { 
          id: 4, 
          name: 'Shashini', 
          progress: 93,
          proposal: 9.3,
          interim: 9.2,
          codeReview: 9.3,
          evaluation: 0,
          overall: 9.3
        },
        { 
          id: 5, 
          name: 'Medini', 
          progress: 90,
          proposal: 9.0,
          interim: 8.9,
          codeReview: 9.0,
          evaluation: 0,
          overall: 9.0
        },
      ],
      overallProgress: 92,
      projectStages: [
        { stage: 'Proposal', status: 'Completed', percentage: 100, date: 'Dec 3, 2025' },
        { stage: 'Interim', status: 'Completed', percentage: 100, date: 'Dec 10, 2025' },
        { stage: 'Code Review', status: 'Completed', percentage: 100, date: 'Dec 17, 2025' },
        { stage: 'Evaluation', status: 'In Progress', percentage: 50, date: 'Dec 20, 2025' },
      ],
      report: {
        quality: 9.0,
        innovation: 8.9,
        teamwork: 9.2,
        documentation: 8.7,
        overallMarks: 9.0,
      },
    },
    3: {
      name: 'Group 3',
      companyName: 'Smart Systems Corp.',
      projectTitle: 'IoT-Based Smart Building Management System',
      projectIntroduction: 'A comprehensive IoT solution for managing energy consumption, security, and environmental conditions in modern buildings with real-time monitoring and automated controls.',
      supervisors: ['Dr. Ibrahim Hassan', 'Prof. Amira Khan'],
      members: [
        { 
          id: 1, 
          name: 'Uditha', 
          progress: 76,
          proposal: 7.6,
          interim: 7.5,
          codeReview: 0,
          evaluation: 0,
          overall: 7.5
        },
        { 
          id: 2, 
          name: 'Janaka', 
          progress: 78,
          proposal: 7.8,
          interim: 7.7,
          codeReview: 0,
          evaluation: 0,
          overall: 7.7
        },
        { 
          id: 3, 
          name: 'Hiruni', 
          progress: 74,
          proposal: 7.4,
          interim: 7.3,
          codeReview: 0,
          evaluation: 0,
          overall: 7.3
        },
        { 
          id: 4, 
          name: 'Shashini', 
          progress: 77,
          proposal: 7.7,
          interim: 7.6,
          codeReview: 0,
          evaluation: 0,
          overall: 7.6
        },
        { 
          id: 5, 
          name: 'Medini', 
          progress: 75,
          proposal: 7.5,
          interim: 7.4,
          codeReview: 0,
          evaluation: 0,
          overall: 7.4
        },
      ],
      overallProgress: 76,
      projectStages: [
        { stage: 'Proposal', status: 'Completed', percentage: 100, date: 'Dec 4, 2025' },
        { stage: 'Interim', status: 'In Progress', percentage: 80, date: 'Dec 15-20, 2025' },
        { stage: 'Code Review', status: 'Pending', percentage: 0, date: 'Dec 22, 2025' },
        { stage: 'Evaluation', status: 'Pending', percentage: 0, date: 'Jan 5, 2026' },
      ],
      report: {
        quality: 7.8,
        innovation: 7.5,
        teamwork: 8.0,
        documentation: 7.6,
        overallMarks: 7.7,
      },
    },
    4: {
      name: 'Group 4',
      companyName: 'Cloud Enterprise Solutions',
      projectTitle: 'Mobile-First Healthcare Management Application',
      projectIntroduction: 'A secure mobile application designed for healthcare providers to manage patient records, appointments, and medical history with HIPAA compliance and cross-platform support.',
      supervisors: ['Dr. Yousef Karim', 'Prof. Hana Fahad'],
      members: [
        { 
          id: 1, 
          name: 'Uditha', 
          progress: 65,
          proposal: 6.5,
          interim: 0,
          codeReview: 0,
          evaluation: 0,
          overall: 6.5
        },
        { 
          id: 2, 
          name: 'Janaka', 
          progress: 68,
          proposal: 6.8,
          interim: 0,
          codeReview: 0,
          evaluation: 0,
          overall: 6.8
        },
        { 
          id: 3, 
          name: 'Hiruni', 
          progress: 62,
          proposal: 6.2,
          interim: 0,
          codeReview: 0,
          evaluation: 0,
          overall: 6.2
        },
        { 
          id: 4, 
          name: 'Shashini', 
          progress: 66,
          proposal: 6.6,
          interim: 0,
          codeReview: 0,
          evaluation: 0,
          overall: 6.6
        },
        { 
          id: 5, 
          name: 'Medini', 
          progress: 64,
          proposal: 6.4,
          interim: 0,
          codeReview: 0,
          evaluation: 0,
          overall: 6.4
        },
      ],
      overallProgress: 65,
      projectStages: [
        { stage: 'Proposal', status: 'Completed', percentage: 100, date: 'Dec 6, 2025' },
        { stage: 'Interim', status: 'Pending', percentage: 0, date: 'Dec 20, 2025' },
        { stage: 'Code Review', status: 'Pending', percentage: 0, date: 'Jan 1, 2026' },
        { stage: 'Evaluation', status: 'Pending', percentage: 0, date: 'Jan 10, 2026' },
      ],
      report: {
        quality: 6.8,
        innovation: 6.5,
        teamwork: 7.0,
        documentation: 6.4,
        overallMarks: 6.7,
      },
    },
  };

  const group = groupsData[groupId] || groupsData[1];

  return (
    <div className="group-detail-page">
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>
          <ChevronLeft size={20} />
          Back to Dashboard
        </button>
        <h1>{group.name}</h1>
      </div>

      <div className="detail-container">
        {/* Group Info Section */}
        <div className="info-section">
          <div className="section-header">
            <h2>Group Information</h2>
            <button className="update-btn">See Project Codes and Documentation</button>
          </div>
          <div className="project-intro">
            <h3>{group.projectTitle}</h3>
            <p>{group.projectIntroduction}</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <label>Group Name</label>
              <p>{group.name}</p>
            </div>
            <div className="info-card">
              <label>Company</label>
              <p>{group.companyName}</p>
            </div>
            <div className="info-card">
              <label>Supervisors</label>
              <p>{group.supervisors.join(', ')}</p>
            </div>
            <div className="info-card">
              <label>Overall Progress</label>
              <div className="progress-display">
                <div className="progress-number">{group.overallProgress}%</div>
                <div className="progress-text-label">Completed</div>
              </div>
              <div className="progress-bar-large">
                <div className="progress-fill-large" style={{ width: `${group.overallProgress}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="members-section">
          <h2>Team Members</h2>
          <div className="members-grid">
            {group.members.map((member) => (
              <div key={member.id} className="member-card">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4>{member.name}</h4>
                <div className="member-progress">
                  <div className="progress-bar-small">
                    <div className="progress-fill-small" style={{ width: `${member.progress}%` }}></div>
                  </div>
                  <span>{member.progress}%</span>
                </div>
                <p className="member-progress-text">Completed</p>
                <button className="member-code-btn">See Project Codes and Documentation</button>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stages Section */}
        <div className="stages-section">
          <h2>Project Performance by Stage</h2>
          <div className="stages-grid">
            {group.projectStages.map((stage, idx) => (
              <div key={idx} className={`stage-card status-${stage.status.toLowerCase().replace(' ', '-')}`}>
                <h4>{stage.stage}</h4>
                <span className="stage-status">{stage.status}</span>
                <div className="stage-progress">
                  <div className="progress-bar-stage">
                    <div className="progress-fill-stage" style={{ width: `${stage.percentage}%` }}></div>
                  </div>
                  <p>{stage.percentage}%</p>
                </div>
                <p className="stage-date">{stage.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Member Marks by Stage Section */}
        <div className="member-marks-section">
          <div className="section-header">
            <h2>Member Marks by Stage</h2>
            <button className="update-btn">Update</button>
          </div>
          <div className="marks-table-container">
            <table className="marks-table">
              <thead>
                <tr>
                  <th>Member Name</th>
                  <th>Proposal</th>
                  <th>Interim</th>
                  <th>Code Review</th>
                  <th>Evaluation</th>
                  <th>Overall</th>
                </tr>
              </thead>
              <tbody>
                {group.members.map((member) => (
                  <tr key={member.id}>
                    <td className="member-name">{member.name}</td>
                    <td className={`mark ${member.proposal > 0 ? 'completed' : 'pending'}`}>
                      {member.proposal > 0 ? member.proposal.toFixed(1) : '-'}
                    </td>
                    <td className={`mark ${member.interim > 0 ? 'completed' : 'pending'}`}>
                      {member.interim > 0 ? member.interim.toFixed(1) : '-'}
                    </td>
                    <td className={`mark ${member.codeReview > 0 ? 'completed' : 'pending'}`}>
                      {member.codeReview > 0 ? member.codeReview.toFixed(1) : '-'}
                    </td>
                    <td className={`mark ${member.evaluation > 0 ? 'completed' : 'pending'}`}>
                      {member.evaluation > 0 ? member.evaluation.toFixed(1) : '-'}
                    </td>
                    <td className="mark overall-mark">{member.overall.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Report Section */}
        <div className="report-section">
          <div className="section-header">
            <h2>Project Report & Marks</h2>
            <button className="update-btn">Update</button>
          </div>
          <div className="report-grid">
            <div className="report-card">
              <label>Member Overall</label>
              <div className="mark-display">{group.report.quality}</div>
            </div>
            <div className="report-card">
              <label>Innovation</label>
              <div className="mark-display">{group.report.innovation}</div>
            </div>
            <div className="report-card">
              <label>Teamwork</label>
              <div className="mark-display">{group.report.teamwork}</div>
            </div>
            <div className="report-card">
              <label>Documentation</label>
              <div className="mark-display">{group.report.documentation}</div>
            </div>
            <div className="report-card overall">
              <label>Overall Marks</label>
              <div className="mark-display overall-mark">{group.report.overallMarks}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
