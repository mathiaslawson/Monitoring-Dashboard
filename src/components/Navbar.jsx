import { useState } from "react";
import {
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        color="dark text-light"
        dark
        expand="md"
        className="d-flex"
        style={{ justifyContent: "space-between", backgroundColor: "#1d2222" }}
      >
        <div>
          All nodes
          <i className="bx bx-fullscreen fs-4" style={{ color: "white" }}></i>
        </div>

        <div>
          <NavbarToggler onClick={toggleNavbar} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem> */}
              <NavItem>
                <div className="d-flex">
                  <i
                    className="bx bx-bulb mx-2 fs-4 fw-bolder"
                    style={{
                      color: "#f99401",
                      position: "relative",
                      top: "0.5rem",
                    }}
                  ></i>{" "}
                  <div
                    className="d-flex text-light p-2"
                    style={{
                      justifyContent: "space-between",
                      backgroundColor: "#00441b",
                      borderRadius: "3px",
                      opacity: "0.9",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        className="mx-2 p-1"
                        style={{
                          backgroundColor: "#00ab44",
                          borderRadius: "15px",
                        }}
                      >
                        <i className="bx bx-play"></i>
                        Playing
                      </div>
                      <div
                        style={{
                          color: "#aebbbb",
                          position: "relative",
                          top: "0.2rem",
                        }}
                        className="mx-4"
                      >
                        11/5/23 20:21 .{" "}
                        <span style={{ color: "#00ab44" }}>
                          22:50
                          <i className="bx bx-right-arrow-alt"></i>
                          22:50
                        </span>{" "}
                        last 15min
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ border: "0.5px solid gray" }}
                    className="mx-4"
                  ></div>
                </div>
              </NavItem>
              <NavItem>
                <div
                  className="d-flex"
                  style={{ position: "relative", top: "0.6rem" }}
                >
                  <div>
                    <p className="mx-3">
                      <i
                        className="bx bx-server fs-3"
                        style={{ color: "#aebbbb" }}
                      ></i>
                    </p>
                  </div>
                  <div className="mx-2">
                    Live{" "}
                    <span
                      className="p-1 px-2"
                      style={{
                        backgroundColor: "#00ab44",
                        borderRadius: "4px",
                      }}
                    >
                      24
                    </span>
                  </div>
                  <div style={{ color: "#608f73" }} className="mx-2">
                    Stale{" "}
                    <span
                      className="p-1 px-2 text-light"
                      style={{
                        backgroundColor: "#608f73",
                        borderRadius: "4px",
                      }}
                    >
                      1
                    </span>
                  </div>
                  <div style={{ color: "#4a5757" }} className="mx-2">
                    Offline{" "}
                    <span
                      className="p-1 px-2 text-light"
                      style={{
                        backgroundColor: "#4a5757",
                        borderRadius: "4px",
                      }}
                    >
                      10
                    </span>
                  </div>
                  <div style={{ color: "#9e8b6e" }}>
                    Offline{" "}
                    <span
                      className="p-1 px-2 text-light"
                      style={{
                        backgroundColor: "#9e8b6e",
                        borderRadius: "4px",
                      }}
                    >
                      0
                    </span>
                  </div>
                  <div style={{ color: "#9e8b6e" }} className="mx-2">
                    <Button
                      style={{
                        backgroundColor: "#00ab44",
                        border: "none",
                        position: "relative",
                        top: "-0.3rem",
                        color: "black",
                      }}
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
       
      </Navbar>
  
    </>
  );
}

export default NavbarComponent;
