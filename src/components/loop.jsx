import React from 'react'

import countries from '../data/products'

function getCountries(){
    return (countries.map(country => {
        return(
            <li key={country.name}>
                <p>{country.name}: Stock Marcket: R${country.stockMarcket} - PMI:{country.pmi}%</p>
            </li>
        )
        })
    )
}

const Country = props =>{
    return(
        <>
            <ul>
                {getCountries()}
            </ul>
        </>
    )
}

export default Country