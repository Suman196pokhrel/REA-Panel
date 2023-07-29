import React from 'react'
import "./user.scss"
import Single from "../../components/single/Single"
import { singleUser } from '../../utils/data'


// Fetch Data and Send to Single component



const User = () => {
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User