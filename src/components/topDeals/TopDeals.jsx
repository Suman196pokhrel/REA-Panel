import React from 'react'
import "./topDeals.scss"
import { topDealUsers } from '../../utils/data'

const TopDeals = () => {
    return (
        <div className='topBox' >
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map((deals) => (
                    <div className="listItem" key={deals.id}>
                        <div className="user">
                            <img src={deals.img} alt="user profile" />
                            <div className="userTexts">
                                <span className="username">{deals.username}</span>
                                <span className="email">{deals.email}</span>

                            </div>
                        </div>
                        <span className='amount'>${deals.amount}</span>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default TopDeals