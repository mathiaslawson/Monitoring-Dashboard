import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  Table,
} from "reactstrap";

import { Link } from "react-router-dom";
import { useState } from "react";

function Agents() {
  const [selectedExport, setSelectedExport] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleExportChange = (value) => {
    setSelectedExport(value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="m-3">
        <Row>
          <Col xl={7} md={3}>
            <Input
              type="text"
              className="form-contorl text-dark p-3"
              placeholder="Search ..."
              style={{ backgroundColor: "#e0e0e0", color: "black" }}
            ></Input>
          </Col>
          <Col>
            <Input
              type="select"
              className="form-contorl text-dark p-3"
              placeholder="Search ..."
              style={{ backgroundColor: "#e0e0e0", color: "black" }}
            >
              <option>Status</option>
            </Input>
          </Col>
          <Col>
            <Input
              type="select"
              className="form-contorl text-dark p-3"
              placeholder="Search ..."
              style={{ backgroundColor: "#e0e0e0", color: "black" }}
            >
              <option>Agent Policy</option>
            </Input>
          </Col>
          <Col>
            <Button
              className="p-3 btn w-100"
              style={{ backgroundColor: "#212529" }}
            >
              Upgrade available
            </Button>
          </Col>
          <Col>
            <Button
              className="btn p-3 w-100"
              style={{ backgroundColor: "#212529" }}
            >
              <i className="bx bx-plus"></i>
              Add agent
            </Button>
          </Col>
        </Row>
        <Row className="m-2 mt-4" style={{ color: "gray" }}>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div>Showing 9 agents</div>
            <div className="d-flex">
              <div>
                <i
                  className="bx bx-radio-circle-marked"
                  style={{ color: "#00d084" }}
                ></i>
                Healthy{" "}
                <span
                  className="p-1 px-2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    borderRadius: "4px",
                  }}
                >
                  3
                </span>
              </div>
              <div className="mx-3">
                <i
                  className="bx bx-radio-circle-marked"
                  style={{ color: "#f3de84" }}
                ></i>
                Unhealthy{" "}
                <span
                  className="p-1 px-2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    borderRadius: "4px",
                  }}
                >
                  0
                </span>
              </div>
              <div className="mx-3">
                <i
                  className="bx bx-radio-circle-marked"
                  style={{ color: "#f3de84" }}
                ></i>
                Updating{" "}
                <span
                  className="p-1 px-2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    borderRadius: "4px",
                  }}
                >
                  2
                </span>
              </div>
              <div className="mx-3">
                <i
                  className="bx bx-radio-circle-marked"
                  style={{ color: "gray" }}
                ></i>
                Offline{" "}
                <span
                  className="p-1 px-2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    borderRadius: "4px",
                  }}
                >
                  4
                </span>
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <Container className="container">
            {/* <div id="toolbar">
              <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>Export Options</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => handleExportChange("")}>
                    Export Basic
                  </DropdownItem>
                  <DropdownItem onClick={() => handleExportChange("all")}>
                    Export All
                  </DropdownItem>
                  <DropdownItem onClick={() => handleExportChange("selected")}>
                    Export Selected
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div> */}
            <table
              id="table"
              data-toggle="table"
              data-search="true"
              data-filter-control="true"
              data-show-export="true"
              data-click-to-select="true"
              data-toolbar="#toolbar"
              className="mt-3 w-100 p-2 text-light mt-3"
              style={{ borderRadius: "4px", backgroundColor: "#151818" }}
            >
              <thead className="">
                <tr>
                  <th data-field="state" data-checkbox="true"></th>
                  <th
                    data-field="prenom"
                    data-filter-control="input"
                    data-sortable="true"
                    className="p-2"
                  >
                    Host
                  </th>
                  <th
                    data-field="date"
                    data-filter-control="select"
                    data-sortable="true"
                    className="p-2"
                  >
                    Status
                  </th>
                  <th
                    data-field="examen"
                    data-filter-control="select"
                    data-sortable="true"
                    className="p-2"
                  >
                    Agent Policy
                  </th>
                  <th data-field="note" data-sortable="true" className="p-2">
                    Version
                  </th>
                  <th data-field="note" data-sortable="true" className="p-2">
                    Last activity
                  </th>
                  <th data-field="note" data-sortable="true" className="p-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#6dccb2",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Healthy
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    Elastiv CLoud agent policy{" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    Test-Agent{" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    Test-Agent{" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                  Elastiv CLoud agent policy {" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                  Elastiv CLoud agent policy {" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                  Elastiv CLoud agent policy {" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                  Elastiv CLoud agent policy {" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td className="bs-checkbox p-3">
                    <input data-index="0" name="btSelectItem" type="checkbox" />
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                    6acd3ed7f6 - windows
                  </td>
                  <td className="p-3">
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#79aad9",
                        borderRadius: "6px",
                        width: "max-content",
                        color: "black",
                      }}
                    >
                      Updating
                    </div>
                  </td>
                  <td style={{ color: "#4694d2" }} className="fw-bolder p-3">
                  Elastiv CLoud agent policy {" "}
                    <i
                      className="bx bx-lock fw-lighter"
                      style={{ color: "gray" }}
                    ></i>
                    <span style={{ color: "gray" }} className="fw-lighter">
                      rev.5
                    </span>
                  </td>
                  <td className="p-3">7.16.0</td>
                  <td className="p-3">30 seconds ago</td>
                  <td className="p-3">
                    <i
                      className="bx bx-dots-horizontal"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Row>
      </div>
    </>
  );
}

export default Agents;
