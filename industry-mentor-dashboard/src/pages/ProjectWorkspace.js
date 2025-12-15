// pages/ProjectWorkspace.js
// Project details page with tabs for Overview, Tasks, Files, and Feedback
import React, { useState } from "react";
import { Home, Calendar, FileText, MessageCircle, Download } from 'lucide-react';
import { projectsData } from '../data/data';

/**
 * ProjectWorkspace Component
 * Shows detailed information about a selected project with 4 tabs:
 * - Overview: Project description, members, progress
 * - Tasks & Timeline: Task list with deadlines and status
 * - Files & Submissions: Submitted files with download/comment options
 * - Feedback: View and add feedback
 */
export default function ProjectWorkspace({ selectedProject, setSelectedProject }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [newFeedback, setNewFeedback] = useState('');

  // Get the selected project data
  const project = projectsData.find(p => p.id === selectedProject) || projectsData[0];

  // Tab configuration
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'tasks', label: 'Tasks & Timeline', icon: Calendar },
    { id: 'files', label: 'Files & Submissions', icon: FileText },
    { id: 'feedback', label: 'Feedback', icon: MessageCircle },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-6">
        
        {/* Left Sidebar - Project Selector */}
        <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-bold text-gray-800 mb-4">My Projects</h3>
          <div className="space-y-2">
            {projectsData.map(p => (
              <div
                key={p.id}
                onClick={() => {
                  setSelectedProject(p.id);
                  setActiveTab('overview');
                }}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  p.id === selectedProject
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                <p className="font-semibold text-gray-800">{p.title}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                  <span>{p.group}</span>
                  <span>•</span>
                  <span>{p.progress}%</span>
                  <span>•</span>
                  <span className={p.status === "Delayed" ? "text-red-600 font-semibold" : ""}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          
          {/* Project Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mt-1">Supervisor: {project.supervisor}</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 border-b border-gray-200 mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Project Description */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Project Description</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>

                {/* Group Members */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Group Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.members.map(member => (
                      <div key={member.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overall Progress */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Overall Progress</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-blue-500 h-4 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">{project.progress}%</span>
                  </div>
                </div>
              </div>
            )}

            {/* TASKS & TIMELINE TAB */}
            {activeTab === 'tasks' && (
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 mb-4">Tasks & Timeline</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Task</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Assigned To</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Deadline</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Progress</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {project.tasks.map(task => (
                        <tr key={task.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-800">{task.name}</td>
                          <td className="px-4 py-3 text-gray-600">{task.assignedTo}</td>
                          <td className="px-4 py-3 text-gray-600">{task.deadline}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full"
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">{task.progress}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              task.status === "Completed" ? "bg-green-100 text-green-700" :
                              task.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                              task.status === "Delayed" ? "bg-red-100 text-red-700" :
                              "bg-gray-100 text-gray-700"
                            }`}>
                              {task.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              Add Comment
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FILES & SUBMISSIONS TAB */}
            {activeTab === 'files' && (
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 mb-4">Files & Submissions</h3>
                {project.files.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <FileText size={48} className="mx-auto mb-4 text-gray-400" />
                    <p>No files submitted yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {project.files.map(file => (
                      <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <FileText size={24} className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{file.name}</p>
                            <p className="text-sm text-gray-600">
                              Uploaded by {file.uploadedBy} on {file.uploadedAt}
                            </p>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-1 inline-block">
                              {file.version}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Download size={16} />
                            Download
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Comment
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* FEEDBACK TAB */}
            {activeTab === 'feedback' && (
              <div className="space-y-6">
                <h3 className="font-bold text-gray-800 mb-4">Project Feedback</h3>
                
                {/* Existing Feedback List */}
                <div className="space-y-3">
                  {project.feedback.map(fb => (
                    <div key={fb.id} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">{fb.author}</span>
                        <span className="text-sm text-gray-600">{fb.date}</span>
                      </div>
                      <p className="text-gray-700">{fb.text}</p>
                    </div>
                  ))}
                </div>

                {/* Add New Feedback Form */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Add Feedback</h4>
                  <textarea
                    value={newFeedback}
                    onChange={(e) => setNewFeedback(e.target.value)}
                    placeholder="Write your feedback here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="4"
                  />
                  <button 
                    className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      // In production, this would submit to backend
                      alert('Feedback submitted: ' + newFeedback);
                      setNewFeedback('');
                    }}
                  >
                    Submit Feedback
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}