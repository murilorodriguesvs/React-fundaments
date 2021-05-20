import React from 'react'

const Paridade = props =>{
    return(
        <div>
            <h3>O número é: {props.num}</h3>
            {props.num % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}

export default Paridade