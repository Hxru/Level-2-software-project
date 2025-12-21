 import { useState } from "react";

const tabs = ["Group", "Supervisor", "Mentor"];

const sampleMessages = {
  Group: [
    { sender: "Alice", text: "Hey team, did you finish the proposal?", time: "10:05 AM" },
    { sender: "You", text: "Yes, I uploaded it yesterday.", time: "10:07 AM" },
  ],
  Supervisor: [
    { sender: "Supervisor", text: "Please refine your methodology section.", time: "9:30 AM" },
  ],
  Mentor: [
    { sender: "Mentor", text: "Good progress so far, keep it up!", time: "8:45 AM" },
  ],
};

const notifications = [
  { type: "Deadline", message: "Proposal submission due Jan 29", priority: "high" },
  { type: "Message", message: "Supervisor sent feedback", priority: "medium" },
  { type: "System", message: "New announcement posted", priority: "low" },
];

export default function Communication() {
  const [activeTab, setActiveTab] = useState("Group");

  return (
    <div className="communication-page">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="comm-layout">
        {/* Chat Area */}
        <div className="chat-area">
          <div className="messages">
            {sampleMessages[activeTab].map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.sender === "You" ? "me" : "other"}`}
              >
                <div className="sender">{msg.sender}</div>
                <div className="text">{msg.text}</div>
                <div className="time">{msg.time}</div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button className="send-btn">Send</button>
          </div>
        </div>

        {/* Notifications */}
        <div className="notifications">
          <h3>Notifications</h3>
          {notifications.map((note, idx) => (
            <div key={idx} className={`note ${note.priority}`}>
              <strong>{note.type}:</strong> {note.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
