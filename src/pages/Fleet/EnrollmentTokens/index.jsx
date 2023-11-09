import { Button } from "reactstrap";
import TableComponent from "../../../components/Common/TableComponent";

function Index() {
  const data = [
    {
      id: "1",
      name: "CalPay-DR-Server (4c6934_232_q22)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
    {
      id: "2",
      name: "Default(4c6934_232_q22_2as23_2323s)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
    {
      id: "3",
      name: "HQ-Without-GTM (7aa2332-23asa-2aas23)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
    {
      id: "4",
      name: "DR-Enroll (eabsa2-as23as-sa2323-asas-as2323)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => <p style={{ color: "#4694d2" }}>{row.name}t</p>,
      sortable: true,
    },

    {
      name: "Secret",
      selector: (row) => (
        <>
          <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#4694d2" }}>{row.secret}</p>
            <p>{row.rev}</p>
          </div>
        </>
      ),
      sortable: true,
      right: true,
    },
    {
      name: "Agent policy",
      selector: (row) => row.agentPolicy,
      sortable: true,
      right: true,
    },
    {
      name: "Created on",
      selector: (row) => row.createdOn,
      sortable: true,
      right: true,
    },
    {
      name: "Active",
      selector: (row) => (
        <>
          <i
            className="bx bx-radio-circle-marked"
            style={{ color: "green" }}
          ></i>
        </>
      ),
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
              <i className="bx bx-trash" style={{ color: "red" }}></i>
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
              >
                <i className="bx bx-plus mx-1"></i>
                Create agent policy
              </Button>
            </div>
          </div>
        </div>
        <TableComponent data={data} columns={columns}></TableComponent>
      </div>
    </>
  );
}

export default Index;
