import React from 'react'
import "./chartBox.scss"
import { Link } from 'react-router-dom'
import {ResponsiveContainer, LineChart, Line, Tooltip} from 'recharts'

const ChartBox = ({title, number, icon, chartData, dataKey, color,percentage }) => {
    return (
        <div className='chartBox'>

            <div className="boxInfo">
                <div className="title">
                    <img src={`${process.env.PUBLIC_URL}/${icon}`} alt="" />
                    <span>{title}</span>
                </div>
                <h1>${number}</h1>
                <Link to={"/"}>
                    View all
                </Link>
            </div>

            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                            position={{x:10,y:50}}
                            labelStyle={{display:"none"}} 
                            contentStyle={{background:"transparent",border:"none"}}
                            />
                            <Line 
                                type="monotone" 
                                dataKey={dataKey}
                                stroke={color} 
                                strokeWidth={2}
                                dot={false}
                                 
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="texts">
                    <div className="percentage" style={{color: percentage<0? "tomato":"limegreen"}}>{percentage}%</div>
                    <div className="duration">this month</div>
                </div>
            </div>

        </div>
    )
}

export default ChartBox