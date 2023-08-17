import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = (props) => {
  return (
    <div className="chart">
      {/* Output of chart bars dynamically -> array of data points, mapping every
      every data point to a chart bar. */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
