
import React from 'react';
import { useState,useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/BarData.js";
import BarChart from './Barchart.jsx';
import { LineData } from "../utils/LineData.js";
import LineChart from './LineChart.jsx';
// import {ThemeContext}  from "../util/ThemeContext";



Chart.register(CategoryScale);

function Charts(){
  // const { theme, setTheme } = useContext(ThemeContext);

  //   const handleChange = () => { 
  //       const isCurrentDark = theme === 'dark';
  //       setTheme(isCurrentDark ? 'light' : 'dark');
  //   }
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.label), 
        datasets: [
            {
              
              data: Data.map((data) => data.percentage),
              backgroundColor: [
                "#A9DDB1",
                "#6C95A7",
                "#6C95A7"
              ],
              borderColor: "none",
        borderWidth: 0,
        borderRadius:10
       
      }
    ]
  });

  const [ChartData , setLineData] = useState({
    labels: LineData.map((data) => data.label), 
    datasets: [
        {
          
          data: LineData.map((data) => data.percentage),
          backgroundColor: [
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",
            "#E6EEF5",

          ],
          borderColor: "none",
   
  }
]
});

    return(
    <>  
    <div className="graph">
        <div className='h-[40%] w-[80%] justify-center ml-5'>
        <BarChart chartData={chartData} />
        </div>
        <p className='pt-2 text-[#6C95A7] text-xl'>New Users <br />50</p>
        <div className="h-[30%] w-[85%] place-self-center justify-center ml-5">
        <LineChart chartData={ChartData}/>
        
        </div>
    </div>
    
    </>
    );
} 
export default Charts;

