import React from 'react'
import "./navbar.scss"
import { Tooltip } from '@mui/material'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Squaer logo" />
        <span>ReAdmin</span>
      </div>
      <div className="icons">
        <Tooltip title="search"><img src={`${process.env.PUBLIC_URL}/search.svg`} alt="" className="icon" /></Tooltip>
        <Tooltip title="apps"><img src={`${process.env.PUBLIC_URL}/app.svg`} alt="" className="icon" /></Tooltip>
        <Tooltip title="expand"><img src={`${process.env.PUBLIC_URL}/expand.svg`} alt="" className="icon" /></Tooltip>
        <Tooltip title="notifications"><div className="notification">
          <img src={`${process.env.PUBLIC_URL}/notifications.svg`} alt="" />
          <span>1</span>
        </div>
        </Tooltip>
        <Tooltip title="users">
        <div className="user">
          <img src={`${process.env.PUBLIC_URL}/suman.jpeg`} alt="" />
          <span>Suman</span>
        </div>
        </Tooltip>
        <Tooltip title="settings"><img src={`${process.env.PUBLIC_URL}/settings.svg`} alt="" className="icon" /></Tooltip>

      </div>
    </div>
  )
}

export default Navbar