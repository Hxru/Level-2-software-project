 import Navbar from "../components/Navbar";
import OverviewCards from "../components/OverviewCards";
import RecentProjects from "../components/RecentProjects";
import Announcements from "../components/Announcements";

function Dashboard() {
  return (
    <div className="main-content">
      <Navbar />
      <h2>Dashboard Overview</h2>
      <OverviewCards />

      {/* Two-column layout */}
      <div className="dashboard-columns">
        <RecentProjects />
        <Announcements />
      </div>
    </div>
  );
}

export default Dashboard;
