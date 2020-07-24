// home page stuff here
import React from 'react'


export default function Home(props) {
    const { details } = props

    if(!details){
        return <h2>Fetching your pizza orders</h2>
    }

    return (
        <div className = 'home-wrapper'>
            <h2>{details.name}'s Pizza Order</h2>
            <p>{details.size}</p>
            <p>{details.sauce}</p>
            <p>{details.toppings}</p>
            <p>Any Special Instructions {details.specialInstruction}</p>

        </div>
    )
}