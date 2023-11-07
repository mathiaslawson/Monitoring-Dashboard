import React, { useEffect } from "react";
import $ from "jquery";


function SpikeCircularProgressBar() {
  useEffect(() => {
    // Import jQuery and the plugin script
    import("jquery").then(($) => {
      // Assuming you have a 'chart' element in your component's render
      const element = $(".chart");

      // Initialize the pie chart
      element.easyPieChart({
        // your options go here
        percent: element.data("percent"), // Example: Get the percentage from data attribute
      });
    });
  }, []);

  return (
    <>
      <div className="chart" data-percent="73">
        73%
      </div>
    </>
  );
}

export default SpikeCircularProgressBar;
