function Announcements() {
  const notices = [
    {
      title: "Urgent Meeting",
      detail: "Supervisor meeting rescheduled to 3 PM today.",
      type: "important",
    },
    {
      title: "System Maintenance",
      detail: "Platform will be down on Sunday 12AM–4AM.",
      type: "warning",
    },
    {
      title: "Evaluation Criteria",
      detail: "New rubric added for Phase 3 evaluation.",
      type: "info",
    },
  ];

  return (
    <div className="announcements">
      {notices.map((notice, index) => (
        <div className={`notice ${notice.type}`} key={index}>
          <h4>{notice.title}</h4>
          <p>{notice.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default Announcements;
