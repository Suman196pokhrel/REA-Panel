import React from 'react'
import "./single.scss"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';





const Single = ({ id, img, title, info, chart, activities }) => {
  return (
    <div className='single'>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {img && <img src={img} alt="user dp" />}
            <h1>{title}</h1>
            <button>update</button>
          </div>
          <div className="details">
            {Object.entries(info).map((item, index) => (
              <div className="item" key={index}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}


          </div>
        </div>
        <hr />

        {chart && <div className="chart">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chart.dataKeys.map((line) => (
                <Line key={line.name} type="monotone" dataKey={line.name} stroke={line.color} activeDot={{ r: 8 }} />

              ))}
            </LineChart>
          </ResponsiveContainer>

        </div>}

      </div>
      <div className="activities">

        <h2>Latest Activities</h2>
        <ul>

          {activities.map((activity, index) => (
            <li key={index}>
              <div>
                <p>{activity.text}</p>
                <time>{activity.time}</time>
              </div>
            </li>
          ))}


        </ul>

      </div>
    </div>
  )
}

export default Single 