function OverviewCards() {
  const data = [
    { title: "Project Progress", value: "75%", detail: "Overall completion" },
    { title: "Tasks", value: "12 / 20", detail: "Completed / Pending" },
    { title: "Upcoming Deadline", value: "20 Dec", detail: "Final Submission" },
    { title: "Feedback", value: "5", detail: "Supervisor comments" },
    { title: "Group Members", value: "6", detail: "Quick view" },
  ];

  return (
    <div className="overview-cards">
      {data.map((card, index) => (
        <div className="card" key={index}>
          <h4>{card.title}</h4>
          <p className="value">{card.value}</p>
          <small>{card.detail}</small>
        </div>
      ))}
    </div>
  );
}

export default OverviewCards;
