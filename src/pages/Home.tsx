import React from 'react'
import BarChart from '../components/BarChart'
import ScatterPlot from '../components/ScatterPlot'

const Home = () => {
    return (
        <div className='flex flex-row justify-center mt-20 min-w-screen max1550:flex-col'>
            {/* This is Scatter Plot  */}
            <ScatterPlot />
            {/* This is Bar Chart */}
            <BarChart />
        </div>
    )
}

export default Home