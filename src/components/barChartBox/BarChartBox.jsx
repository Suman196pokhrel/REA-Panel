import React from 'react'
import "./BarChartBox.scss"
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts"

const BarChartBox = ({ title, color, dataKey, chartData }) => {
    return (
        <div className='barChartBox'>
            <h1>{title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart  data={chartData}>
                        <Tooltip
                        cursor={{fill:"none"}}
                            labelStyle={{ display: "none" }}
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                        />
                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox