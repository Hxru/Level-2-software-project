import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Overview from './pages/Overview';
import ProjectGroups from './pages/ProjectGroups';
import Submissions from './pages/Submissions';
import Evaluation from './pages/Evaluation';
import UserManagement from './pages/UserManagement';
import Communication from './pages/Communication';
import Calendar from './pages/Calendar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            
            {/* Academic Level - Level 1 Routes */}
            <Route path="level-1/proposal" element={<Evaluation level="1" stage="proposal" />} />
            <Route path="level-1/interim" element={<Evaluation level="1" stage="interim" />} />
            <Route path="level-1/final" element={<Evaluation level="1" stage="final" />} />
            <Route path="level-1/submission" element={<Submissions level="1" />} />
            
            {/* Academic Level - Level 2 Routes */}
            <Route path="level-2/proposal" element={<Evaluation level="2" stage="proposal" />} />
            <Route path="level-2/interim" element={<Evaluation level="2" stage="interim" />} />
            <Route path="level-2/code-review" element={<Evaluation level="2" stage="code-review" />} />
            <Route path="level-2/final" element={<Evaluation level="2" stage="final" />} />
            <Route path="level-2/submission" element={<Submissions level="2" />} />
            
            {/* Academic Level - Level 3 Routes */}
            <Route path="level-3/proposal" element={<Evaluation level="3" stage="proposal" />} />
            <Route path="level-3/interim" element={<Evaluation level="3" stage="interim" />} />
            <Route path="level-3/final" element={<Evaluation level="3" stage="final" />} />
            <Route path="level-3/submission" element={<Submissions level="3" />} />
            
            {/* Academic Level - Level 4 Routes */}
            <Route path="level-4/proposal" element={<Evaluation level="4" stage="proposal" />} />
            <Route path="level-4/interim" element={<Evaluation level="4" stage="interim" />} />
            <Route path="level-4/final" element={<Evaluation level="4" stage="final" />} />
            <Route path="level-4/submission" element={<Submissions level="4" />} />
            
            {/* Calendar */}
            <Route path="calendar" element={<Calendar />} />
            
            {/* Communication */}
            <Route path="communication" element={<Communication />} />
          </Route>

          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
