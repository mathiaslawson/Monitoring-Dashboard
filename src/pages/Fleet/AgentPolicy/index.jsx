import React from "react";

function Index() {
  const data = [
    {
      name: "CAL-DR_Docker_GTM-01",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
    {
      name: "CAL-HQ_Docker_one",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
    {
      name: "GIP Token",
      rev: "rev. 218",
      description: "THis is for agents that us the GTM as its DNS",
      latestUpdate: "Nov 09, 2023",
      agents: "1",
      integrations: "203",
    },
    {
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
      selector: (row) => <p style={{ color: "#4694d2" }}>{row.name}t</p>,
      sortable: true,
    },
  
    {
      name: "Description",
      selector: (row) => (
        <>
          <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#4694d2" }}>{row.description}</p>
            <p>{row.rev}</p>
          </div>
        </>
      ),
      sortable: true,
      right: true,
    },
    {
      name: "CPU",
      selector: (row) => row.CPU,
      sortable: true,
      right: true,
    },
    {
      name: "Memory",
      selector: (row) => row.memory,
      sortable: true,
      right: true,
    },
    {
      name: "Last activity",
      selector: (row) => row.last_activity,
      sortable: true,
      right: true,
    },
    {
      name: "Version",
      selector: (row) => row.version,
      sortable: true,
      right: true,
    },
    {
      name: "Actions",
      selector: (row) => row.runtime,
      sortable: true,
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

  return <></>;
}

export default Index;
