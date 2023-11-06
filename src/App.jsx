import { Col, Container, Row } from "reactstrap";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Home from "./pages/Home";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div style={{ backgroundColor: "#0c0f0f" }}>
      <Navbar />

      <Row>
        {/* Left Sidebar */}

        <LeftSidebar />

        <Col>
          {" "}
          <Home />
        </Col>

        {/* <Home />

          <RightSidebar /> */}
      </Row>
      {/* <Home /> */}
    </div>
  );
}

export default App;
