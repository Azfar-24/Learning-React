import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMax = dataPointValues.reduce((pre, next) => pre + next, 0);
  console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
