// components/Topbar.js
// Top navigation bar with page title, notifications, and profile menu
import React, { useState } from "react";
import { Bell, User, LogOut, ChevronDown } from 'lucide-react';
import { notificationsData } from '../data/data';

/**
 * Topbar Component
 * - Displays current page name
 * - Shows welcome message with mentor name
 * - Notifications dropdown with badge
 * - Profile menu with dropdown (Profile Settings, Logout)
 */
export default function Topbar({ currentPage, mentorName }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Get mentor initials for avatar
  const mentorInitials = mentorName.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left Side - Current Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">{currentPage}</h1>
      </div>
      
      {/* Right Side - Notifications, Welcome Message, Profile */}
      <div className="flex items-center gap-4">
        
        {/* Notifications Dropdown */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false); // Close profile menu
            }}
            className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell size={20} />
            {/* Notification Badge - Shows red dot if there are unread notifications */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* Notifications Dropdown Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notificationsData.map(notif => (
                  <div 
                    key={notif.id} 
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <p className="text-sm text-gray-800">{notif.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Welcome Message */}
        <span className="text-gray-600">
          Welcome back, <span className="font-semibold text-gray-800">{mentorName}</span>
        </span>
        
        {/* Profile Dropdown Menu */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false); // Close notifications
            }}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* Profile Avatar Circle */}
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {mentorInitials}
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </button>

          {/* Profile Dropdown Panel */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-2">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center gap-2">
                  <User size={16} />
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md flex items-center gap-2">
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}