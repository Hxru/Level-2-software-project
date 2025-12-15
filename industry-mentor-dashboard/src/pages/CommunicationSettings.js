// pages/CommunicationSettings.js
// Communication and Settings page with Messages, Notifications, and Profile tabs
import React, { useState } from "react";
import { Search, Send, FileText, AlertCircle, MessageCircle, Clock } from 'lucide-react';
import { messagesData, notificationsData } from '../data/data';

/**
 * CommunicationSettings Component
 * Combines three main sections:
 * - Messages: Chat interface with conversation list
 * - Notifications: All system notifications
 * - Profile & Settings: Profile information and preferences
 */
export default function CommunicationSettings() {
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedChat, setSelectedChat] = useState(messagesData[0]?.id);
  const [messageInput, setMessageInput] = useState('');

  // Tab configuration
  const tabs = [
    { id: 'messages', label: 'Messages' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'profile', label: 'Profile & Settings' },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-200 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="flex gap-6 h-96">
            
            {/* Left Side - Chat List */}
            <div className="w-80 border-r border-gray-200 pr-4 overflow-y-auto">
              {/* Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Chat List */}
              <div className="space-y-2">
                {messagesData.map(msg => (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedChat(msg.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedChat === msg.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {msg.avatar}
                      </div>
                      {/* Message Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 truncate">{msg.with}</p>
                        <p className="text-sm text-gray-600 truncate">{msg.lastMessage}</p>
                      </div>
                      {/* Unread Badge */}
                      {msg.unread > 0 && (
                        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {msg.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chat Box */}
            <div className="flex-1 flex flex-col">
              
              {/* Chat Header */}
<div className="pb-4 border-b border-gray-200 mb-4">
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
      {messagesData.find(m => m.id === selectedChat)?.avatar}
    </div>
    <div>
      <p className="font-semibold text-gray-800">
        {messagesData.find(m => m.id === selectedChat)?.with}
      </p>
    </div>
  </div>
</div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {/* Sample Messages - Left (received) */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg rounded-tl-none px-4 py-2 max-w-xs">
                    <p className="text-gray-800">Thanks! We've updated the map integration.</p>
                    <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                  </div>
                </div>
                
                {/* Sample Messages - Right (sent) */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-lg rounded-tr-none px-4 py-2 max-w-xs">
                    <p> I reviewed your documentation.Go Ahead</p>
                    <p className="text-xs text-blue-100 mt-1">10:32 AM</p>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && messageInput.trim()) {
                      // In production, send message to backend
                      alert('Message sent: ' + messageInput);
                      setMessageInput('');
                    }
                  }}
                />
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  onClick={() => {
                    if (messageInput.trim()) {
                      // In production, send message to backend
                      alert('Message sent: ' + messageInput);
                      setMessageInput('');
                    }
                  }}
                >
                  <Send size={18} />
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === 'notifications' && (
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 mb-4">All Notifications</h3>
            {notificationsData.map(notif => (
              <div key={notif.id} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                {/* Notification Icon */}
                <div className={`p-2 rounded-lg flex-shrink-0 ${
                  notif.type === 'file' ? 'bg-blue-100' :
                  notif.type === 'alert' ? 'bg-red-100' :
                  notif.type === 'feedback' ? 'bg-green-100' :
                  'bg-yellow-100'
                }`}>
                  {notif.type === 'file' ? <FileText size={20} /> :
                   notif.type === 'alert' ? <AlertCircle size={20} /> :
                   notif.type === 'feedback' ? <MessageCircle size={20} /> :
                   <Clock size={20} />}
                </div>
                {/* Notification Content */}
                <div className="flex-1">
                  <p className="text-gray-800">{notif.text}</p>
                  <p className="text-sm text-gray-500 mt-1">{notif.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROFILE & SETTINGS TAB */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            
            {/* Profile Information Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Profile Information</h3>
              <div className="space-y-4">
                {/* Profile Photo */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                    MD
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Change Photo
                  </button>
                </div>

                {/* Profile Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Mentor Demo"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="mentor@gmail.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      defaultValue="99X"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+94 77 123 4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Notification Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Email notifications for new submissions</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Email notifications for project updates</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">SMS notifications for urgent matters</span>
                </label>
              </div>
            </div>

            {/* Security Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Security</h3>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Change Password
              </button>
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-gray-200">
              <button 
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => alert('Profile settings saved successfully!')}
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}