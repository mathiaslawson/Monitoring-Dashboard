import { Col } from "reactstrap";

function RightSidebar() {
  return (
    <>
      <Col md={3} className="bg-light" style={{margin: '0px', padding: '0px'}}>
        <ul className="list-group">
          <li className="list-group-item">Right Sidebar Item 1</li>
          <li className="list-group-item">Right Sidebar Item 2</li>
          <li className="list-group-item">Right Sidebar Item 3</li>
        </ul>
      </Col>
    </>
  );
}

export default RightSidebar;
