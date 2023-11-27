import React, { useState, useEffect } from "react";
import { Col, Button } from "reactstrap";

function LeftSidebar({ isOpen }) {
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar);
  };

  // Add an event listener to check the screen width and update the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <>
      <Col
        style={{ backgroundColor: "black", width: 'auto', position: '',   }}
        xl={12}
        md={12}
        sm={12}
      >
        <div className="list-group">
          <div
            className="list-group-item"
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              border: "none",
            }}
            onClick={toggleRightSidebar}
          >
            <p className="text-center mt-3">
              {" "}
              <i
                className="bx bx-pulse fw-bolder fs-3"
                style={{ color: "#00ab44" }}
              ></i>
            </p>
          </div>
        </div>
      </Col>

      {/* Show the right sidebar only on non-mobile screens */}
      {!isMobile && showRightSidebar && (
        <Col
          md={12}
          sm={12}
          xl={12}
          style={{ padding: "10px", margin: "0px", backgroundColor: "black", width: "250px",  height: "100svh", }}
        >
          <div style={{ backgroundColor: "black" }}>
            {/* Right Sidebar Content */}
            <div
              className="d-flex p-2"
              style={{ justifyContent: "space-between" }}
            >
              <div style={{ color: "gray" }}>
                <i className="bx bx-plug mx-2"></i>Integration
              </div>
              <div></div>
            </div>
            <div
              className="d-flex p-2"
              style={{ justifyContent: "space-between" }}
            >
              <div style={{ color: "gray" }}>
                <i className="bx bx-server mx-2"></i>Integration
              </div>
              <div>
                <i className="bx bx-lock mx-2" style={{ color: "gray" }}></i>
              </div>
            </div>
            <div
              className="d-flex p-2"
              style={{ justifyContent: "space-between" }}
            >
              <div style={{ color: "gray", cursor: "pointer" }}>
                <i className="bx bx-plug mx-2"></i>Invite Users
              </div>
              <div>
                <i className="bx bx-lock mx-2" style={{ color: "gray" }}></i>
              </div>
            </div>
            <div>
              <div
                className="d-flex p-2"
                style={{ justifyContent: "space-between", cursor: 'pointer' }}
                onClick={toggleList}
              >
                <div style={{ color: "gray" }}>
                  <i className="bx bx-plug mx-2"></i>Invite Users
                </div>
                <div>
                  <i
                    className={`bx ${
                      showList ? "bx-chevron-up" : "bx-lock"
                    } mx-2`}
                    style={{ color: "gray" }}
                  ></i>
                </div>
              </div>
              <hr style={{ color: "gray" }} className="mx-3" />
              {showList && (
                <ul>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2 p-1"
                  >
                    Active Directory
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Apache
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Cassandra
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    CoreDNS
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    demo-sites
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    DNS Query
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Docker
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Host reachability
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    HTTP Endpoints
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    IIS
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Kubernetes
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Machine Learning
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    MS Exchange
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Nginx
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    PostgreSQL
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Redis
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    UPS
                  </li>
                  <li
                    style={{ color: "#464d5b", listStyleType: "none" }}
                    className="my-2"
                  >
                    Windows
                  </li>
                </ul>
              )}
            </div>
          </div>
        </Col>
      )}
    </>
  );
}

export default LeftSidebar;
