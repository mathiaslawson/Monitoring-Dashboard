import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
import Agents from "./Agents";

function Index() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Col className="mt-5">
        <h3 style={{color: '#e0e0e0'}}>Fleet</h3>
        <p style={{color: '#536775'}} className="">Centralized management for Elastic Agents.</p>
      </Col>{" "}
      <Col md={12} xl={12} style={{}} className="mt-5">
        <div className="content">
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab1" })}
                  onClick={() => toggleTab("tab1")}
                >
                  <i className="bx bx-home mx-1"></i>
                  Agent
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab2" })}
                  onClick={() => toggleTab("tab2")}
                >
                  <i className="bx bx-network-chart mx-1"></i>
                  Agent policies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab3" })}
                  onClick={() => toggleTab("tab3")}
                >
                  <i className="bx bx-server mx-1"></i>
                  Enrollment tokens
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab4" })}
                  onClick={() => toggleTab("tab4")}
                >
                  <i className="bx bxl-kubernetes mx-1"></i>
                  Data streams
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="tab1">
                <Row>
                  <Col sm="12">
                    <Agents />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab2">
                <Row>
                  <Col sm="12">
                    <h4>Agents policies</h4>
                    {/* Add your content for Tab 2 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab3">
                <Row>
                  <Col sm="12">
                    <h4>Enrollment Tokens</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab4">
                <Row>
                  <Col sm="12">
                    <h4>Data streams</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab5">
                <Row>
                  <Col sm="12">
                    <h4>Dashboards</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Index;
