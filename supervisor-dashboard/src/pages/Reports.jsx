import { Download, FileText, BarChart3, PieChart } from 'lucide-react';
import './Reports.css';

const Reports = () => {
  const reportTypes = [
    {
      title: 'Project Progress Report',
      description: 'Detailed progress report for all projects',
      icon: BarChart3,
      color: '#667eea',
    },
    {
      title: 'Student Performance Report',
      description: 'Individual and group performance analytics',
      icon: PieChart,
      color: '#48bb78',
    },
    {
      title: 'Evaluation Summary',
      description: 'Summary of all evaluations and scores',
      icon: FileText,
      color: '#f6ad55',
    },
    {
      title: 'Submission Status Report',
      description: 'Track submission deadlines and completions',
      icon: FileText,
      color: '#38b2ac',
    },
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Q4 Progress Report',
      date: '2025-12-10',
      size: '2.4 MB',
      type: 'PDF',
    },
    {
      id: 2,
      name: 'Mid-Term Evaluations',
      date: '2025-11-15',
      size: '1.8 MB',
      type: 'PDF',
    },
    {
      id: 3,
      name: 'Student Analytics',
      date: '2025-11-01',
      size: '3.2 MB',
      type: 'XLSX',
    },
  ];

  const handleGenerateReport = (reportTitle) => {
    alert(`Generating ${reportTitle}...`);
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <h2>Reports & Analytics</h2>
        <p>Generate and download project reports</p>
      </div>

      {/* Report Types */}
      <div className="report-types-grid">
        {reportTypes.map((report, index) => (
          <div key={index} className="report-type-card">
            <div className="report-icon" style={{ background: `${report.color}20` }}>
              <report.icon size={32} style={{ color: report.color }} />
            </div>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <button
              className="generate-btn"
              onClick={() => handleGenerateReport(report.title)}
            >
              <FileText size={18} />
              Generate Report
            </button>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="recent-reports-section">
        <h3>Recent Reports</h3>
        <div className="recent-reports-list">
          {recentReports.map((report) => (
            <div key={report.id} className="report-item">
              <div className="report-info">
                <FileText size={24} color="#667eea" />
                <div>
                  <h4>{report.name}</h4>
                  <p>
                    {new Date(report.date).toLocaleDateString()} • {report.size} • {report.type}
                  </p>
                </div>
              </div>
              <button className="download-btn">
                <Download size={18} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
