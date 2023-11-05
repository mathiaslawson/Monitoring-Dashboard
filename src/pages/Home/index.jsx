import { Col } from "reactstrap";

function index() {
  return (
    <>
      <Col md={7} xl={8}>
        <div className="content">
          {/* Your main content goes here */}
          <h1>Welcome to My Website</h1>
          <p>This is the main content area.</p>
        </div>
      </Col>
    </>
  );
}

export default index;
