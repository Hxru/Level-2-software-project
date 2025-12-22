function ActivityFeed() {
  const activities = [
    { user: "Mike", action: "updated task 'DB Schema'", time: "10 mins ago" },
    { user: "You", action: "uploaded 'Report_v2.pdf'", time: "2 hours ago" },
    { user: "Dr. Smith", action: "commented on your project", time: "Yesterday" },
    { user: "Group Member", action: "completed 'Frontend Wireframes'", time: "2 days ago" },
  ];

  return (
    <div className="activity-feed">
      {activities.map((activity, index) => (
        <div className="activity-item" key={index}>
          <p>
            <strong>{activity.user}</strong> {activity.action}
          </p>
          <span className="time">{activity.time}</span>
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;
