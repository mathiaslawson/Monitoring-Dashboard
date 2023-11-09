import movies from "../movies";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import "../style.css";
import { Button } from "reactstrap";
import TableComponent from "../../../components/Common/TableComponent";


const columns = [
  {
    name: "Status",
    button: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              backgroundColor: "#00d084",
              color: "black",
              border: "none",
            }}
          >
            Healthy
          </button>
        </div>
      </div>
    ),
  },

  {
    name: "Host",
    selector: (row) => <p style={{ color: "#4694d2" }}>{row.host}t</p>,
    sortable: true,
  },

  {
    name: "Agent policy",
    selector: (row) => (
      <>
        <div className="" style={{ width: "300px" }}>
          <p style={{ color: "#4694d2" }}>{row.agent_policy}</p>
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



function Agents() {
  return (
    <div className="p-2">
      <div
        className="card mt-2"
        style={{ border: "none ", borderRadius: "0px" }}
      >
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
                <i className="bx bx-time-five mx-1"></i>
                Agent activity
              </Button>
            </div>
            <div>
              <Button
                className="btn"
                style={{ color: "gray", backgroundColor: "#2d3535" }}
              >
                Add Fleet Server
              </Button>
            </div>
            <div>
              <Button
                className="btn"
                style={{ color: "gray", backgroundColor: "#2d3535" }}
              >
                Add agent
              </Button>
            </div>
          </div>
        </div>
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "#252c2c",
          }}
        >
          <div>Search Component</div>
        </div>
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "#252c2c",
          }}
        >
          <div>Showing 8 agents</div>
          <div className="d-flex gap-3">
            <div>
              <i
                className="bx bx-radio-circle-marked"
                style={{ color: "green", position: "relative", top: "0.08rem" }}
              ></i>
              Healthy
            </div>
            <div>
              <i
                className="bx bx-radio-circle-marked"
                style={{ color: "gold", position: "relative", top: "0.08rem" }}
              ></i>
              Unhealthy
            </div>
            <div>
              <i
                className="bx bx-radio-circle-marked"
                style={{
                  color: "#00d084",
                  position: "relative",
                  top: "0.08rem",
                }}
              ></i>
              Updating
            </div>
            <div>
              <i
                className="bx bx-radio-circle-marked"
                style={{ color: "gray", position: "relative", top: "0.08rem" }}
              ></i>
              Offline
            </div>
          </div>
        </div>

        <TableComponent  data={movies} columns={columns}/>
     
      </div>
    </div>
  );
}

export default Agents;
