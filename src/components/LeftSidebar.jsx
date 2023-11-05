import { Col } from "reactstrap";

function LeftSidebar() {
  return (
    <>
      <Col md={2} className="bg-light" xl={1} style={{padding: '0px', margin: '0px'}}>
        <ul className="list-group">
          <li className="list-group-item">Sidebar Item 1</li>
          <li className="list-group-item">Sidebar Item 2</li>
          <li className="list-group-item">Sidebar Item 3</li>
        </ul>
      </Col>
    </>
  );
}

export default LeftSidebar;
