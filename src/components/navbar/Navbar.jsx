import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="Squaer logo" />
        <span>ReAdmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://lh3.googleusercontent.com/pw/AIL4fc_B9ZUZRqCPkj1MVZmcOWbHrtOrfeTpaZw9Z4zdFRX1kY2SVFoArZEVZR0yYUz77WozaMUUCLJdivUBXdVLWO1ZVh-mY7qUmVWAYXXyMy2c7FfkvoQ6CkRIkcodH83J5TZ3PjNMdbT4GvP6ZCmxFHFS0iqMo1uyc7pxz96J-ww8VYw-9uMd6DDJnrMfoX4D7ieHyXU1k761tRODYk3-JSLPktZ1pikTJX6ja0kHvaFj1TykFwqdebte2kplGgL09XauZJluvdB48mPCapSq2AD-EzpT34_xrKk7wkDEBT1j_qpgrlXoJRqOGiQSRhBiksnmOX9jTqVAJFFViWIkaCALpBpTWvd0pmNCqDPUnII5g39mtfk81O9IaaCe5sAYfmwBgO67wj6X70LcLNDrmW3HQfa5lQRpHHsuiWUBJKKSMxWtWIc1BsnJhZG6oewBTM1SnFqe4SZS6GHnuzXuqRYZ-EvXKRo9N4Q0uyl3gR8Ux9LNpoOWGLKKi7301dHRfE4piSiXsWFtg0qlQR3HcsBjwp91Pzh6JW1nvp1HEss-BXEJPoG_9v6muHVFb1B-fX6NRUUMStn-Z2NXifBUS9H6OJCnJM2JRuVEj0hbGCe-fallDYklshIi4lNu-VE4bh1C8BDJXuvsjoKH_dxIUq7v3J4WC2rMr9FR_3wrrIII5YBXE8X64zCVHsC-YXbXvqOzrqUp5XyCDPfCkN6qgRIrfrp2tv5ypk0KMC-MR7Fkh1gwbtgTjOaS4Sga9sM6ztOuhtHgWnb3hnFmI5gkmzI7P8tc4Zwq5LkhOnKm5xWMZ6kz4BoeVTbJY3E1-Dj8-93uP9oaJ8k7MnaLLm-50Bay5xMahmS0F19Vrxl9smaixZax1Hn_85nI2Lq6U8AjX8rRPZZY5DgdBnuRWVT3iLbyx_4zDHijjlKnj8IeZlFn09Ij7jGMumBKD7yYC8OHgKnWhSTEtK9q6lI52BqQlVCvmT3880sBE6G902G3IwlHzQrsa12ha99Gn82fMwYmEypk=w761-h675-s-no?authuser=0" alt="" />
          <span>Suman</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />

      </div>
    </div>
  )
}

export default Navbar