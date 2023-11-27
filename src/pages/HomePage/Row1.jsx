import { Col } from "reactstrap";
import ChartComponent from "../../components/Charts/SpikeCircularProgressBar";
import MetricChart from "../../components/Charts/MetricChart";

function Row1() {
  const chartData = [
    { data: "40", color: "#fe3912" },
    { data: "69", color: "#fe3912" },
    { data: "20", color: "#fe3912" },
    { data: "40", color: "#fe3912" },
    { data: "60", color: "#fe3912" },
    { data: "67", color: "#fe3912" },
    //{ data: "60", color: "#00ab44" },
    // Add more data objects for additional charts
  ];

  return (
    <>
      <div className="d-flex gap-1">
        <div
          style={{
            color: "gray",
            border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "#1d2222",
          }}
          className="p-4"
        >
          <div className="">
            <div>
              <h6>Nodes</h6>
            </div>

            <div>
              <p>Number of nodes claimed to Birdseye in current room</p>
            </div>
          </div>

          <div
            className="d-flex px-4"
            style={{ justifyContent: "space-evenly" }}
          ></div>
        </div>
        <div
          style={{
            border: "1px solid transparent",
            borderRadius: "8px",
            backgrounddivor: "#1d2222",
          }}
          className=""
        >
          <MetricChart />
        </div>
        <div
          style={{
            border: "1px solid transparent",
            borderRadius: "8px",
            backgrounddivor: "#1d2222",
          }}
          className="col-xl-3"
        >
          <div
            style={{
              color: "gray",
              border: "1px solid transparent",
              borderRadius: "8px",
              backgroundColor: "#1d2222",
            
            }}
            className="p-4 "
          >
            <div className="">
              <div>
                <h6>Nodes by ML</h6>
              </div>

              <div>
                <p>Breakdown of the nodes in regards to our ML features</p>
              </div>
            </div>

            <div
              className="d-flex px-4"
              style={{ justifyContent: "space-evenly" }}
            >
              <div
                className="mt-5 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="">
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #00d084", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      Enable
                    </div>

                    <div className="fw-bolder mx-5">-</div>
                  </div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid gold", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      Disabled
                    </div>

                    <div className="fw-bolder mx-5">-</div>
                  </div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid gray", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      Not Capable
                    </div>

                    <div className="fw-bolder mx-5">-</div>
                  </div>
                </div>
              </div>

              <div>
                <ChartComponent data={"0"} color={"#fe3912"} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid transparent",
            borderRadius: "8px",
            backgrounddivor: "#1d2222",
          }}
          className="col-xl-5"
        >
          <div
            style={{
              color: "gray",
              border: "1px solid transparent",
              borderRadius: "8px",
              backgroundColor: "#1d2222",
            }}
            className="p-4"
          >
            <div className="">
              <div>
                <h6>Nodes over type of machine/technology</h6>
              </div>

              <div>
                <p>
                  Breakdown of the machine/technology where Birdseye is running
                  in
                </p>
              </div>
            </div>

            <div
              className="d-flex px-4"
              style={{ justifyContent: "space-evenly" }}
            >
              <div
                className="mt-5 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="">
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #52c8c4", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      Bare Metal <i className="bx bx-copy mx-1 mt-1"></i>
                    </div>

                    <div className="fw-bolder mx-5">-</div>
                  </div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #6990ff", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      VM <i className="bx bx-copy mx-1 mt-1"></i>
                    </div>

                    <div className="fw-bolder mx-5">-</div>
                  </div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #c5aefc", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      Container <i className="bx bx-copy mx-1 mt-1"></i>
                    </div>

                    <div className="fw-bolder mx-5">-</div>
                  </div>
                </div>
              </div>

              <div>
                <ChartComponent data={"0"} color={"#fe3912"} />
              </div>

              <div className="mt-5 fw-bolder">No data</div>
              <div className="mt-5 fw-bolder">No data</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row1;
