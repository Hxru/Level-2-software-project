import { useState } from 'react';
import { Search, Star, CheckCircle, XCircle, Clock } from 'lucide-react';
import './Evaluation.css';

const Evaluation = ({ level = 'All', stage = 'All' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const stageNames = {
    'proposal': 'Proposal Stage',
    'interim': 'Interim Evaluation',
    'code-review': 'Code Review',
    'final': 'Final Evaluation',
  };

  const evaluations = [
    {
      id: 1,
      project: 'AI-Based Chatbot System',
      group: 'Group A',
      phase: 'interim',
      submittedDate: '2025-12-10',
      status: 'pending',
      score: null,
      level: '2',
    },
    {
      id: 2,
      project: 'E-Commerce Platform',
      group: 'Group B',
      phase: 'final',
      submittedDate: '2025-12-08',
      status: 'pending',
      score: null,
      level: '3',
    },
    {
      id: 3,
      project: 'Mobile Learning Application',
      group: 'Group C',
      phase: 'interim',
      submittedDate: '2025-11-25',
      status: 'approved',
      score: 85,
      level: '1',
    },
    {
      id: 4,
      project: 'Data Analytics Dashboard',
      group: 'Group D',
      phase: 'proposal',
      submittedDate: '2025-11-20',
      status: 'approved',
      score: 78,
      level: '4',
    },
    {
      id: 5,
      project: 'Smart Home Automation',
      group: 'Group E',
      phase: 'code-review',
      submittedDate: '2025-12-12',
      status: 'pending',
      score: null,
      level: '2',
    },
  ];

  const filteredEvaluations = evaluations
    .filter((evaluation) => level === 'All' || evaluation.level === level)
    .filter((evaluation) => stage === 'All' || evaluation.phase === stage)
    .filter((evaluation) =>
      evaluation.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evaluation.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleEvaluate = (id) => {
    alert(`Opening evaluation form for project ${id}`);
  };

  const pageTitle = () => {
    if (level !== 'All' && stage !== 'All') {
      return `Evaluation - Level ${level}: ${stageNames[stage]}`;
    } else if (level !== 'All') {
      return `Evaluation - Level ${level}`;
    } else if (stage !== 'All') {
      return `Evaluation - ${stageNames[stage]}`;
    }
    return 'Project Evaluation';
  };

  return (
    <div className="evaluation-page">
      <div className="page-header">
        <h2>{pageTitle()}</h2>
        <p>Review and evaluate project submissions</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search evaluations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Evaluation Cards */}
      <div className="evaluation-grid">
        {filteredEvaluations.map((evaluation) => (
          <div key={evaluation.id} className="evaluation-card">
            <div className="evaluation-header">
              <div>
                <h3>{evaluation.project}</h3>
                <p className="group-name">{evaluation.group} • Level {evaluation.level}</p>
              </div>
              <span className={`eval-status ${evaluation.status}`}>
                {evaluation.status === 'pending' && <Clock size={16} />}
                {evaluation.status === 'approved' && <CheckCircle size={16} />}
                {evaluation.status === 'rejected' && <XCircle size={16} />}
                {evaluation.status.charAt(0).toUpperCase() + evaluation.status.slice(1)}
              </span>
            </div>

            <div className="evaluation-details">
              <div className="detail-item">
                <span className="detail-label">Phase</span>
                <span className="detail-value">{evaluation.phase}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Submitted</span>
                <span className="detail-value">
                  {new Date(evaluation.submittedDate).toLocaleDateString()}
                </span>
              </div>
              {evaluation.score && (
                <div className="detail-item">
                  <span className="detail-label">Score</span>
                  <span className="detail-value score">
                    <Star size={16} fill="#f6ad55" color="#f6ad55" />
                    {evaluation.score}/100
                  </span>
                </div>
              )}
            </div>

            <div className="evaluation-actions">
              {evaluation.status === 'pending' ? (
                <>
                  <button
                    className="eval-btn primary"
                    onClick={() => handleEvaluate(evaluation.id)}
                  >
                    Evaluate Now
                  </button>
                  <button className="eval-btn secondary">View Submission</button>
                </>
              ) : (
                <>
                  <button className="eval-btn secondary">View Details</button>
                  <button className="eval-btn secondary">Download</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredEvaluations.length === 0 && (
        <div className="no-results">
          <p>No evaluations found</p>
        </div>
      )}
    </div>
  );
};

export default Evaluation;
