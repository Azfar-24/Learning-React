import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
