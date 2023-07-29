import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'
import { menu } from "../../utils/data"
import { Tooltip } from '@mui/material'

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((lItems) => (
            <Link to={lItems.url} className='listItem' key={lItems.id}>
              <Tooltip title={lItems.title}>
                <img src={`/${lItems.icon}`} alt="logo for item" />
                <span className="listItemTitle">{lItems.title}</span>
              </Tooltip>

            </Link>
          ))}


        </div>
      ))}



    </div>
  )
}

export default Menu