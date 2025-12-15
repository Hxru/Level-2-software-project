// App.js
// Main application component that handles routing and layout
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import ProjectWorkspace from "./pages/ProjectWorkspace";
import CommunicationSettings from "./pages/CommunicationSettings";

/**
 * App Component
 * - Main application container
 * - Manages current page state and navigation
 * - Layout: Sidebar (left) + Main Content (right with Topbar)
 */
export default function App() {
  // State management
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState('p1');
  const mentorName = 'Mentor Demo';

  // Page name mapping for Topbar display
  const pageNames = {
    dashboard: 'Dashboard',
    projects: 'Project Workspace',
    communication: 'Communication & Settings',
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation - Fixed on left */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar - Shows current page, welcome message, notifications, profile */}
        <Topbar 
          currentPage={pageNames[currentPage]} 
          mentorName={mentorName} 
        />

        {/* Page Content - Scrollable area */}
        <div className="flex-1 overflow-y-auto">
          {/* Conditional rendering based on currentPage state */}
          {currentPage === 'dashboard' && (
            <Dashboard 
              setCurrentPage={setCurrentPage} 
              setSelectedProject={setSelectedProject} 
            />
          )}
          
          {currentPage === 'projects' && (
            <ProjectWorkspace 
              selectedProject={selectedProject} 
              setSelectedProject={setSelectedProject} 
            />
          )}
          
          {currentPage === 'communication' && (
            <CommunicationSettings />
          )}
        </div>
      </div>
    </div>
  );
}
