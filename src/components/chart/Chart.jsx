import React from 'react';
import "./chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';





const data = [
    {name: "5", Total: 5000},
    {name: "9", Total: 10000},
    {name: "11", Total: 5000},
    {name: "13", Total: 4000},
    {name: "15", Total: 11000},
    {name: "17", Total: 16000},
    {name: "17", Total: 3000},
    {name: "17", Total: 18000},
    {name: "17", Total: 16000},
    {name: "17", Total: 25000},
];






const Chart = () => {
    return (
        <div className='chart'>
            <div className="title">Activity</div>
            <ResponsiveContainer width="100%" aspect={2 / 1 }>
                <AreaChart 
                width={730} 
                height={250} 
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray'/>
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                    <Tooltip />
                    <Area 
                    type="monotone" 
                    dataKey="Total" 
                    stroke="#8884d8" 
                    fillOpacity={1} 
                    fill="url(#total)" 
                    />
                   
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;
