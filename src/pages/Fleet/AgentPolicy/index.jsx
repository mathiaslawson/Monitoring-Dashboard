import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import TableComponent from "../../../components/Common/TableComponent";
import AddAgentPolicy from "./AddAgentPolicy";
import { useState } from "react";

function Index() {

    const [isRight, setIsRight] = useState(false);
    const toggleRightCanvas = () => {
      setIsRight(!isRight);
    };

  const data = [
    {
      id: "1",
      name: "CAL-DR_Docker_GTM-01",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
    {
      id: "2",
      name: "CAL-HQ_Docker_one",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
    {
      id: "3",
      name: "GIP Token",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
    {
      id: "4",
      name: "Elatice ",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => <p style={{ color: "#00ab44" }}>{row.name}t</p>,
      sortable: true,
    },

    {
      name: "Description",
      selector: (row) => (
        <>
          <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#00ab44" }}>{row.description}</p>
            <p>{row.rev}</p>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Latest update",
      selector: (row) => row.latestUpdate,
      sortable: true,
      center: true,
    },
    {
      name: "Agents",
      selector: (row) => row.agents,
      sortable: true,
      center: true,
    },
    {
      name: "Integrations",
      selector: (row) => row.integrations,
      sortable: true,
      center: true,
    },

    {
      name: "Actions",
      selector: (row) => row.runtime,
      sortable: true,
      center: true,
      cell: () => (
        <div className="App">
          <div className="openbtn text-center">
            <button
              type="button"
              className="btn fs-3 mt-3"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
              style={{
                backgroundColor: "",
                color: "white",
                border: "none",
              }}
            >
              <i className="bx bx-dots-horizontal"></i>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="p-2">
        {" "}
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "#252c2c",
          }}
        >
          <div></div>
          <div className="d-flex gap-1">
            <div>
              <Button
                className="btn"
                style={{ color: "gray", backgroundColor: "#2d3535" }}
              >
                <i className="bx bx-refresh mx-1"></i>
                Reload
              </Button>
            </div>
            <div>
              <Button
                className="btn"
                style={{ color: "gray", backgroundColor: "#2d3535" }}
                onClick={()=>{
                    toggleRightCanvas()
                }}
              >
                <i className="bx bx-plus mx-1"></i>
                Create agent policy
              </Button>
            </div>
           
          </div>
        </div>
        <TableComponent data={data} columns={columns}></TableComponent>


        {/* Off Canvas */}
        <Offcanvas
        isOpen={isRight}
        toggle={toggleRightCanvas}
        id="offcanvasRight"
        direction="end"
        style={{ color: "#e0e0e0", backgroundColor: "#2d3535" }}
        className="w-50"
      >
        <OffcanvasHeader toggle={toggleRightCanvas} id="offcanvasRightLabel">
          <h3>Add agent policy</h3>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <p className="fw-light">
              Agent policies are used to manage settings acroos a group of agents You can dd integrations to your agent policy to sepcify what your agents collect. When you edit an agent policy, you can use Fleet to deploy updates to be a specified group of agents.
            </p>
            <hr />
            <AddAgentPolicy />
          </div>
        </OffcanvasBody>
      </Offcanvas>
      </div>
    </>
  );
}

export default Index;
