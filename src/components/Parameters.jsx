import React from 'react'

const Parameters = (props) => {
    return(
        <>
            <h3>Eu me chamo: {props.name}</h3>
            <h3>E me é curso: {props.curso}</h3>
        </>
    )
}

export default Parameters