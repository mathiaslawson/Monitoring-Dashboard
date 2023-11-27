import React, { useEffect, useRef } from "react";
import EasyPieChart from "../../plugin/easypiechart"; // Update the import path as needed
import { Card, CardBody, Col, Row } from "reactstrap";

function ChartComponent({ data, color }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!chartInstance.current) {
      // Initialize the chart only if it hasn't been created yet
      chartInstance.current = new EasyPieChart(chartRef.current, {
        barColor: data ===  "0" ? "transparent" : color,
        trackColor: "#353f3f",
        size: "150",
        lineWidth: "10",
        scaleColor: "transparent"
      });
    }

    // Update the chart when the data-percent attribute changes
    if (chartInstance.current) {
      const newPercent = parseFloat(
        chartRef.current.getAttribute("data-percent")
      );
      chartInstance.current.update(newPercent);

      // Calculate and set the position of the content within the chart
      const chartSize = chartRef.current.clientWidth;
      const contentSize = contentRef.current.clientWidth;
      const position = (chartSize - contentSize) / 2;
      contentRef.current.style.left = `${position}px`;
    }
  }, [color, data]);

  return (
    <Card
      className="col-md-2"
      style={{
        position: "",
        backgroundColor: "transparent",
        border: '1px solid transparent',
        borderRadius: "3px",
        width: "max-content",
        height: '25svh'
      }}
    >
      <CardBody>
        <p className="text-center" style={{ color: "gray" }}>
          {/* Average CPU per Node{" "} */}
        </p>
        <Row>
          <Col>
            <div
              data-percent={data}
              className="chart"
              ref={chartRef}
              style={{ color: "white", position: "relative" }}
            >
              <div
                ref={contentRef}
                style={{ position: "absolute", color: "gray" }}
                className="mt-2 fw-bolder"
              >
                <p className="text-center mt-5" style={{color: data ===  "0" ? "transparent" : ""}}>{data}</p>
                <p style={{ color: data ===  "0" ? "transparent" : "#353f3f"}}>mb/s</p>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ChartComponent;
