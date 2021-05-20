import React from 'react'

const Children = props =>{
    return (
        <>
            <h3>Os filhos:</h3>
            {props.children}
        </>
    )
}

export default Children