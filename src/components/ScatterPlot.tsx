import React from 'react'
import WineData from "../Utils/Wine-Data"

import ReactEcharts from "echarts-for-react";


const ScatterPlot = () => {
    // Option of EChart Component
    const option = {
        xAxis: {
            type: 'category',
            data: [...WineData.map(data => {
                return data["Color intensity"];
            })]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [...WineData.map(data => {
                    return data["Hue"];
                })],
                type: 'scatter'
            }
        ]
    };

    return (
        <div className='flex flex-col items-center'>
            <h2>Scatter Plot</h2>
            <div className='max-w-[50rem] w-[90vw]'>
                {/* Chart of Scatter Plot */}
                <ReactEcharts option={option}  />
            </div>
        </div>
    )
}

export default ScatterPlot