import { Col } from "reactstrap";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
//import SpikeCircularProgressBar from "../../components/Charts/SpikeCircularProgressBar";
//import SpeedometerComponent from "../../components/Charts/Speedometer";
import HomePage from "../HomePage";
import Fleet from "../Fleet";

function Index() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Col md={12} xl={12} style={{}}>
        <div className="content">
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab1" })}
                  onClick={() => toggleTab("tab1")}
                >
                  <i className="bx bx-home mx-1"></i>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab2" })}
                  onClick={() => toggleTab("tab2")}
                >
                  <i className="bx bx-network-chart mx-1"></i>
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab3" })}
                  onClick={() => toggleTab("tab3")}
                >
                  <i className="bx bx-server mx-1"></i>
                  Nodes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab4" })}
                  onClick={() => toggleTab("tab4")}
                >
                  <i className="bx bxl-kubernetes mx-1"></i>
                  Kubernetes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab5" })}
                  onClick={() => toggleTab("tab5")}
                >
                  <i className="bx bx-tachometer mx-1"></i>
                  Dashboards
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab6" })}
                  onClick={() => toggleTab("tab6")}
                >
                  <i className="bx bx-bell mx-1"></i>
                  Alerts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab7" })}
                  onClick={() => toggleTab("tab7")}
                >
                  <i className="bx bx-search-alt mx-1"></i>
                  Anomalies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab8" })}
                  onClick={() => toggleTab("tab8")}
                >
                  <i className="bx bx-analyse mx-1"></i>
                  Functions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab9" })}
                  onClick={() => toggleTab("tab9")}
                >
                  <i className="bx bx-message-square-detail mx-1"></i>
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab10" })}
                  onClick={() => toggleTab("tab10")}
                >
                  <i className="bx bx-message-square-detail mx-1"></i>
                  Fleet
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="tab1">
                <Row>
                  <Col sm="12">
                    <HomePage />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab2">
                <Row>
                  <Col sm="12">
                    <h4>Over view</h4>
                    {/* Add your content for Tab 2 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab3">
                <Row>
                  <Col sm="12">
                    <h4>Nodes</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab4">
                <Row>
                  <Col sm="12">
                    <h4>Kubernetes</h4>
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
              <TabPane tabId="tab6">
                <Row>
                  <Col sm="12">
                    <h4>Alerts</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab7">
                <Row>
                  <Col sm="12">
                    <h4>Anomalies</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab8">
                <Row>
                  <Col sm="12">
                    <h4>Functions </h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab9">
                <Row>
                  <Col sm="12">
                    <h4>Events</h4>
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab10">
                <Row>
                  <Col sm="12">
                    <Fleet />
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
