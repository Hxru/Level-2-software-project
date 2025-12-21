import { useState } from "react";

function ChatPanel() {
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hey team, did you finish the schema?", time: "10:00 AM" },
    { sender: "Alice", text: "Yes, I uploaded it yesterday.", time: "10:05 AM" },
    { sender: "Bob", text: "Working on frontend wireframes now.", time: "10:15 AM" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const updatedMessages = [
      ...messages,
      { sender: "You", text: newMessage, time: "Just now" },
    ];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <div className="chat-panel">
      <div className="messages">
        {messages.map((msg, index) => (
          <div className={`message ${msg.sender === "You" ? "self" : "other"}`} key={index}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatPanel;
