import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Home from "./pages/Home";
import SignUp from "./pages/Authentication/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex" style={{ height: "100vh", backgroundColor: "#1c1e21" }}>
        {/* Left Sidebar */}
        <div>
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Navbar */}
          <div className="mb-3">
            <Navbar />
          </div>

          {/* Page Content */}
          <div className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: "#1c1e21" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
