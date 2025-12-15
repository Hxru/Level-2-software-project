// pages/Dashboard.js
// Main dashboard page showing project summary, assigned projects, deadlines, and recent activity
import React from "react";
import { FolderKanban, Clock, AlertCircle, CheckCircle, Calendar, FileText, MessageCircle } from 'lucide-react';
import { projectsData, notificationsData } from '../data/data';

/**
 * SummaryCard Component
 * Displays a single summary statistic with an icon
 */
function SummaryCard({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
}

/**
 * Dashboard Component
 * Main landing page for mentors showing:
 * - Summary cards (Assigned Groups, Ongoing, Delayed, Completed)
 * - Assigned projects list with progress bars
 * - Upcoming deadlines
 * - Recent activity feed
 */
export default function Dashboard({ setCurrentPage, setSelectedProject }) {
  // Calculate summary statistics from projects data
  const totalProjects = projectsData.length;
  const ongoingProjects = projectsData.filter(p => p.status === "On Track" || p.status === "In Progress").length;
  const delayedProjects = projectsData.filter(p => p.status === "Delayed").length;
  const completedProjects = projectsData.filter(p => p.status === "Completed").length;

  // Get upcoming deadlines - extract tasks from all projects and sort by date
  const upcomingDeadlines = projectsData.flatMap(project => 
    project.tasks
      .filter(task => task.status !== "Completed")
      .map(task => ({
        project: project.title,
        task: task.name,
        deadline: task.deadline,
        assignedTo: task.assignedTo
      }))
  ).sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).slice(0, 5);

  return (
    <div className="p-6 space-y-6">
      
      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="Assigned Groups" 
          value={totalProjects} 
          icon={FolderKanban} 
          color="bg-blue-500" 
        />
        <SummaryCard 
          title="Ongoing Projects" 
          value={ongoingProjects} 
          icon={Clock} 
          color="bg-green-500" 
        />
        <SummaryCard 
          title="Delayed Projects" 
          value={delayedProjects} 
          icon={AlertCircle} 
          color="bg-red-500" 
        />
        <SummaryCard 
          title="Completed" 
          value={completedProjects} 
          icon={CheckCircle} 
          color="bg-purple-500" 
        />
      </div>

      {/* Assigned Projects List Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Assigned Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projectsData.map(project => (
            <div 
              key={project.id} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedProject(project.id);
                setCurrentPage('projects');
              }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === "On Track" ? "bg-green-100 text-green-700" :
                  project.status === "Delayed" ? "bg-red-100 text-red-700" :
                  "bg-blue-100 text-blue-700"
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Project Details */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Group:</span>
                  <span>{project.group}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Supervisor:</span>
                  <span>{project.supervisor}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-800">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      project.status === "Delayed" ? "bg-red-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Deadlines Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar size={24} />
          Upcoming Deadlines
        </h2>
        <div className="space-y-3">
          {upcomingDeadlines.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.task}</p>
                <p className="text-sm text-gray-600">{item.project} - {item.assignedTo}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">{item.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {notificationsData.slice(0, 5).map(notif => (
            <div key={notif.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              {/* Activity Icon */}
              <div className={`p-2 rounded-lg ${
                notif.type === 'file' ? 'bg-blue-100' :
                notif.type === 'alert' ? 'bg-red-100' :
                notif.type === 'feedback' ? 'bg-green-100' :
                'bg-yellow-100'
              }`}>
                {notif.type === 'file' ? <FileText size={16} /> :
                 notif.type === 'alert' ? <AlertCircle size={16} /> :
                 notif.type === 'feedback' ? <MessageCircle size={16} /> :
                 <Clock size={16} />}
              </div>
              {/* Activity Text */}
              <div className="flex-1">
                <p className="text-sm text-gray-800">{notif.text}</p>
                <p className="text-xs text-gray-500 mt-1">{notif.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}