import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'

const element = <App></App>

ReactDOM.render(
    element,
    document.querySelector('#root')
)