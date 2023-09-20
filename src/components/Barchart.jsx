
import React from "react";

import { Bar } from "react-chartjs-2";
import {TuneOutlined} from "@mui/icons-material"


function BarChart ({ chartData }) {
 
  return (
    <div className="">
     
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          }
        }}
        />
    </div>
  );
};

export default BarChart;