import { Button, Col, Input, Row } from "reactstrap";
import "./auth.css";
import data from "./data.png";

function SignUp() {
  return (
    <>
      <Row>
        <Col xl={6} md={6} sm={0}>
          <div>
            <div className="text-center px-5 mt-4">
              <img src={data} className="img-fluid" width="340"></img>
            </div>
            <div className="text-center px-5 mt-5">
              <p className="text-light fw-bolder">
                <span style={{ color: "#00ab44" }} className="mx-3">
                  1,178,091
                </span>{" "}
                Nodes Online
              </p>
              <p className="text-light fw-bolder">
                <span style={{ color: "#00ab44" }} className="mx-3">
                  65, 877
                </span>{" "}
                Github Stars
              </p>
              <p className="text-light fw-bolder">
                <span style={{ color: "#00ab44" }} className="mx-3">
                  601,538,012
                </span>{" "}
                DockerHub Pulls
              </p>
            </div>
            <div className="text-center px-5 mt-5">
              <Button
                className="btn p-2 px-5"
                style={{ backgroundColor: "#00ab44", border: "none" }}
              >
                Live demo
              </Button>
            </div>
            <div
              className="text-center px-5 mt-5"
              style={{ display: "grid", justifyItems: "center" }}
            >
              <div className="d-flex text-light w-50">
                <div>
                  <i className="bx bx-badge-check fs-1 mx-3 mt-3 fw-lighter"></i>
                </div>
                <div className="d-grid text-start">
                  <h6 className="fw-bolder">Free forever</h6>
                  <p className="fw-lighter">
                    Birdseye community is free forever and gives you everything
                    you need to start monitoring. For more serious enterprise
                    users, paid subscriptions are available for added-value
                    features.
                  </p>
                </div>
              </div>
              <div className="d-flex text-light w-50 mt-3">
                <div>
                  <i className="bx bx-shield-quarter fs-1 mx-3 mt-3 fw-lighter"></i>
                </div>
                <div className="d-grid text-start">
                  <h6 className="fw-bolder">Privacy by design</h6>
                  <p className="fw-lighter">
                    Birdseye’s distributed architecture is key to its incredible
                    speed and scalability. It’s also key to data safety, as your
                    metrics are only ever streamed live, and will never be
                    centrally stored by Birdseye.
                  </p>
                </div>
              </div>
              <div className="d-flex text-light w-50 mt-3 text-center">
                <p>
                  Need help? Check out our{" "}
                  <span style={{ color: "#00ab44" }}>docs, forums </span>or{" "}
                  <span style={{ color: "#00ab44" }}>
                    public discord channel
                  </span>
                </p>
              </div>

              <div>
                <hr />
              </div>

              <div>

              </div>
            </div>
          </div>
        </Col>
        <Col
          xl={6}
          md={6}
          sm={12}
          style={{ backgroundColor: "white", height: "100vh" }}
          className="hstack justify-content-center"
        >
          <div className="col-xl-6 col-md-8">
            <div className="text-center ">
              {" "}
              <h3 className="fw-bolder">
                <i
                  className="bx bx-pulse fw-bolder mx-1"
                  style={{ color: "#00ab44" }}
                ></i>
                Birdseye
              </h3>
            </div>

            <div className="d-grid text-center mt-5">
              <h4 className="fw-bolder text-muted">Welcome!</h4>
              <p>Sign in and let's get you started</p>
            </div>

            <div className="d-grid text-center mt-5">
              <Button
                color=""
                className="btn-label p-3"
                style={{ backgroundColor: "#00d084", color: "white" }}
              >
                {" "}
                <i className="bx bxl-google label-icon align-middle fs-16 me-2"></i>{" "}
                Continue with Google{" "}
              </Button>
              <Button
                color=""
                className="btn-label p-3 mt-3"
                style={{ backgroundColor: "#445260", color: "white" }}
              >
                {" "}
                <i className="bx bxl-github label-icon align-middle fs-16 me-2"></i>{" "}
                Continue with Github{" "}
              </Button>
            </div>

            <div className="mt-5">
              <hr />
            </div>

            <div className="mt-3">
              <Input
                className="form-control p-3"
                type="text"
                placeholder="Enter an email address"
              />
            </div>

            <div className="mt-5">
              <Button
                className="btn w-100 p-3"
                style={{ backgroundColor: "#00d084", border: "none" }}
              >
                Sign in by email
              </Button>
            </div>

            <div className="mt-5">
              <hr />
            </div>

            <div className="mt-5 text-center">
              <p className="fs-5">
                Don't have a Birdseye account yet? Relax! Sign-in and we will
                create one for you!
              </p>
              <p className="mt-5">
                By creating an account, you agree with Birdseye's
                <span style={{ color: "#00ab44" }}>
                  Terms And Conditions
                </span>{" "}
                and our{" "}
                <span style={{ color: "#00ab44" }}>Privacy Policy.</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SignUp;
