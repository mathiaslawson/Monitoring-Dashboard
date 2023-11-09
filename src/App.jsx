import { Col, Container, Row } from "reactstrap";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Home from "./pages/Home";
//import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div style={{backgroundColor: '#0c0f0f'}}>
      <Navbar />
      <div style={{ height: "100vh" }} className="d-flex">
        {/* Left Sidebar */}

        <LeftSidebar />

        <Col className="w-100">
          {" "}
          <Home />
        </Col>

        {/* <Home />

          <RightSidebar /> */}
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default App;
