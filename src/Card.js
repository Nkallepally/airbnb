import React from 'react'
import "./Card.css"


function Card({ h4, title, src

}) {
    return (
        <div className='card'>
<div>
            <div className='card-info'>
                <h2>{title}</h2>
                <h4>{h4}</h4>
            <span>
            <img src={src} alt=" " />
            </span>
            </div>
            </div>


            <div className='card-info2'>

            </div>
            
        </div>
    )
}

export default Card