import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import Notices from "./pages/Notices";
import Communication from "./pages/Communication";
import Level1 from "./pages/levels/Level1";
import Level2 from "./pages/levels/Level2";
import Level3 from "./pages/levels/Level3";
import Level4 from "./pages/levels/Level4";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/level4" element={<Level4 />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
