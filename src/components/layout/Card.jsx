import './card.css'
import React from 'react'

const Card = props =>{
    return(
        <>
            <div className='Card'>
                <div className='Main'>
                    {props.children}
                </div>
                <div className='footer'>
                    {props.title}
                </div>
            </div>
        </>
    )    
}

export default Card