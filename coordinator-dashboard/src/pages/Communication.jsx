import { useState } from 'react';
import { Send, Search, MessageCircle } from 'lucide-react';
import './Communication.css';

const Communication = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Group A - John Doe',
      lastMessage: 'Thank you for the feedback on our proposal.',
      timestamp: '10:30 AM',
      unread: 2,
      avatar: 'J',
    },
    {
      id: 2,
      name: 'Dr. Smith',
      lastMessage: 'I have reviewed the mid-term evaluation.',
      timestamp: 'Yesterday',
      unread: 0,
      avatar: 'S',
    },
    {
      id: 3,
      name: 'Group B - Jane Smith',
      lastMessage: 'When is the final submission deadline?',
      timestamp: 'Yesterday',
      unread: 1,
      avatar: 'J',
    },
    {
      id: 4,
      name: 'Group C - Mike Wilson',
      lastMessage: 'We have uploaded the latest version.',
      timestamp: '2 days ago',
      unread: 0,
      avatar: 'M',
    },
  ];

  const messages = selectedUser
    ? [
        {
          id: 1,
          sender: selectedUser.name,
          text: 'Hello, I have a question about our project evaluation.',
          timestamp: '10:00 AM',
          isOwn: false,
        },
        {
          id: 2,
          sender: 'You',
          text: 'Sure, what would you like to know?',
          timestamp: '10:15 AM',
          isOwn: true,
        },
        {
          id: 3,
          sender: selectedUser.name,
          text: 'Thank you for the feedback on our proposal.',
          timestamp: '10:30 AM',
          isOwn: false,
        },
      ]
    : [];

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`Message sent: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="communication-page">
      <div className="page-header">
        <h2>Communication</h2>
        <p>Message students and supervisors</p>
      </div>

      <div className="communication-container">
        {/* Conversations List */}
        <div className="conversations-sidebar">
          <div className="sidebar-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="conversations-list">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation-item ${selectedUser?.id === conv.id ? 'active' : ''}`}
                onClick={() => setSelectedUser(conv)}
              >
                <div className="conv-avatar">{conv.avatar}</div>
                <div className="conv-content">
                  <div className="conv-header">
                    <h4>{conv.name}</h4>
                    <span className="conv-time">{conv.timestamp}</span>
                  </div>
                  <p className="conv-last-message">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <div className="unread-badge">{conv.unread}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {selectedUser ? (
            <>
              <div className="chat-header">
                <div className="chat-user-info">
                  <div className="chat-avatar">{selectedUser.avatar}</div>
                  <div>
                    <h3>{selectedUser.name}</h3>
                    <p>Online</p>
                  </div>
                </div>
              </div>

              <div className="messages-container">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`message ${msg.isOwn ? 'own' : ''}`}
                  >
                    <div className="message-bubble">
                      <p>{msg.text}</p>
                      <span className="message-time">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              <form className="message-input-container" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">
                  <Send size={20} />
                </button>
              </form>
            </>
          ) : (
            <div className="no-conversation">
              <MessageCircle size={64} />
              <h3>Select a conversation</h3>
              <p>Choose a conversation from the list to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communication;
