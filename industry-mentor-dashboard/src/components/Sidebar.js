// components/Sidebar.js
// Sidebar navigation component with menu items
import React from "react";
import { Home, FolderKanban, MessageSquare } from 'lucide-react';

/**
 * Sidebar Component
 * - Fixed left sidebar with navigation menu
 * - Shows EduSync branding
 * - Navigation items: Dashboard, Project Workspace, Communication & Settings
 * - Highlights active page
 */
export default function Sidebar({ currentPage, setCurrentPage }) {
  // Menu items configuration
  const menuItems = [
    { 
      id: 'dashboard', 
      icon: Home, 
      label: 'Dashboard' 
    },
    { 
      id: 'projects', 
      icon: FolderKanban, 
      label: 'Project Workspace' 
    },
    { 
      id: 'communication', 
      icon: MessageSquare, 
      label: 'Communication & Settings' 
    },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white">EduSync</h1>
        <p className="text-xs text-slate-400 mt-1">Mentor Panel</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-slate-700">
        <p className="text-xs text-slate-400 text-center">
          University Project Management System
        </p>
      </div>
    </aside>
  );
}