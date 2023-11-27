import { Row } from "reactstrap";
import Row1 from "./Row1";
import Row3 from "./Row3";
import Row2 from "./Row2";

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
      {/* <div className="d-flex m-2 mt-4 gap-2 mx-2" style={{ flexWrap: "wrap" }}>
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
      </div> */}
      <div className=" p-4"  style={{backgroundColor: '#151818'}}>
      <Row >
        <Row1 />
     </Row>
     <Row>
      <Row2 />
     </Row>
     <Row>
      <Row3 />
     </Row>
      </div>
    
    </>
  );
}

export default Index;
