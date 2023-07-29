import React from 'react'
import "./error.scss"
import { useRouteError } from 'react-router-dom'



const Error = () => {
  const error = useRouteError()
  return (
    <div className='error'>
      {/* <img src="" alt="" /> */}
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <span>
        <i>{error.statusText || error.message}</i>
      </span>

    </div>
  )
}

export default Error