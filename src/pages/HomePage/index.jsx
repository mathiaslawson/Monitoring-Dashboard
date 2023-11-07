import React, { useState } from "react";
import ChartComponent from "../../components/Charts/SpikeCircularProgressBar"; // Import your ChartComponent

function Index() {
  // Define data for each chart
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
      <div className="d-flex m-2 mt-4 gap-2 mx-2" style={{ flexWrap: "wrap" }}>
        {chartData.map((dataObj, index) => (
          <ChartComponent
            key={index}
            data={dataObj.data}
            color={dataObj.color}
          />
        ))}
      </div>
      <div className="d-flex m-2 mt-4 gap-2 mx-2" style={{ flexWrap: "wrap" }}>
        {chartData.map((dataObj, index) => (
          <ChartComponent
            key={index}
            data={dataObj.data}
            color={dataObj.color}
          />
        ))}
      </div>
    </>
  );
}

export default Index;
