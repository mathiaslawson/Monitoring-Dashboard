import { Container, Row } from "reactstrap";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Home from "./pages/Home";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content */}
          <Home />

          {/* Right Sidebar */}
          <RightSidebar />
        </Row>
      </Container>
    </div>
  );
}

export default App;
