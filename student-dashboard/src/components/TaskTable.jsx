import { useState } from "react";

function TaskTable() {
  const [tasks] = useState([
    {
      name: "Research Methodology",
      member: "Alice",
      deadline: "2025-12-15",
      status: "In Progress",
      priority: "High",
      progress: 70,
    },
    {
      name: "Database Schema Design",
      member: "Bob",
      deadline: "2025-12-20",
      status: "Completed",
      priority: "Medium",
      progress: 100,
    },
    {
      name: "Frontend Wireframes",
      member: "Charlie",
      deadline: "2025-12-22",
      status: "Not Started",
      priority: "High",
      progress: 0,
    },
    {
      name: "Testing",
      member: "David",
      deadline: "2025-12-14",
      status: "In Progress",
      priority: "Low",
      progress: 40,
    },
  ]);

  const today = new Date();

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Assigned To</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          const deadlineDate = new Date(task.deadline);
          const isOverdue = deadlineDate < today && task.status !== "Completed";

          return (
            <tr key={index} className={isOverdue ? "overdue" : ""}>
              <td>{task.name}</td>
              <td>{task.member}</td>
              <td>{task.deadline}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                {task.progress}%
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TaskTable;
