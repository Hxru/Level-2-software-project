function Timeline() {
  const phases = [
    {
      name: "Phase 1: Research",
      start: "Sep 1",
      end: "Sep 30",
      status: "Done",
    },
    {
      name: "Phase 2: Design & Prototyping",
      start: "Oct 1",
      end: "Oct 20",
      status: "Done",
    },
    {
      name: "Phase 3: Development",
      start: "Oct 21",
      end: "Nov 15",
      status: "Active",
    },
    {
      name: "Phase 4: Testing & Submission",
      start: "Nov 16",
      end: "Dec 1",
      status: "Upcoming",
    },
  ];

  return (
    <div className="timeline">
      {phases.map((phase, index) => (
        <div className={`timeline-item ${phase.status.toLowerCase()}`} key={index}>
          <h4>{phase.name}</h4>
          <p>
            {phase.start} – {phase.end}
          </p>
          <span className="status">{phase.status}</span>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
