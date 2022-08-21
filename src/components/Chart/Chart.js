import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {

    //map will return an array of value(number) to dataPointValues 
    const dataPointValues=props.dataPoints.map((dataPoint)=>dataPoint.value)

    //spread operator pull out all the array elements and add them as standalone arguments to this max method
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">

    {/* when chart is used by some component it sends datapoints as props that would be an array having value and should be plotted using ChartBar */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label} 
        />
      ))}
    </div>
  );
};
export default Chart;
