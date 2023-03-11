import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Charts.css";

const Charts = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    colors: ["#93dba4"],
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 35, 45, 50, 49, 60, 70, 91],
    },
  ]);

  const [options2, setOptions2] = useState({});
  const [series2, setSeries2] = useState([50, 55, 41, 17, 15]);
  //   const [labels, setLabels] = useState(["A", "B", "C", "D", "E"]);

  return (
    <div className="container">
      <div className="mini">
        <Chart options={options} series={series} type="bar" width="500" />
        <p>Chart for Employees</p>
      </div>
      <div className="mini">
        <Chart options={options2} series={series2} type="donut" width="400" />
        <p>Chart for Progress</p>
      </div>
    </div>
  );
};

export default Charts;
