import React from 'react'
import WineData from "../Utils/Wine-Data"

import ReactEcharts from "echarts-for-react";


const BarChart = () => {

    //Collection of the Same Category Alochol
    const alcoholCategory: any = {};
    //Array of Types of ALcohol
    const alcoholNames: number[] = [];

    //Pushing The Data in the Category Object after checking If it Exist and if not then create new object parameter 
    WineData.forEach(data => {
        if (alcoholCategory[data.Alcohol]) {
            alcoholCategory[`${data.Alcohol}count`] += 1;
            alcoholCategory[data.Alcohol] += data["Malic Acid"];
        } else {
            alcoholNames.push(data.Alcohol);
            alcoholCategory[`${data.Alcohol}count`] = 1;
            alcoholCategory[data.Alcohol] = data["Malic Acid"];
        }
    })

    const option = {
        xAxis: {
            type: 'category',
            data: [...alcoholNames.map(name => `Alcohol ${name}`)]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [...alcoholNames.map(name => {
                    return alcoholCategory[name] / alcoholCategory[`${name}count`];
                })],
                type: 'bar'
            }
        ],
        graphic: {
            type: 'image',
        },
    };


    return (
        <div className='flex flex-col items-center'>
            <h2>Bar Chart</h2>
            <div className='max-w-[50rem] w-[90vw]'>
                <ReactEcharts option={option} />
            </div>
        </div>
    )
}

export default BarChart;