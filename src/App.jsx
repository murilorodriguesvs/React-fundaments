import React from 'react'

import './app.css'

import Card from './components/layout/Card'
import First from './components/First'
import Parameters from './components/Parameters'
import Children from './components/Childrens'
import Country from './components/loop'
import Paridade from './components/Conditional'

const App = props =>{
    return(
        <div className='App'>
            <Card title='Exercício #1 - Primeiro Componente'>
                <First/>
            </Card>
            <Card title='Exercício #2 - Parameters'>
                <Parameters name='Murilo Rodrigues' curso='Engenharia Física'></Parameters>
            </Card>
            <Card title='Exercício #3 - Children'>
                <Children>
                    <ul>
                        <li>Murilo</li>
                        <li>Júlia</li>
                        <li>Gustavo</li>
                        <li>Maria Lúcia</li>
                        <li>Randesley</li>
                    </ul>
                </Children>
            </Card>
            <Card title='Exercício #4 - Loop'>
                <Country></Country>
            </Card>
            <Card title='Exercício #5 - Condiitonal'>
                <Paridade num={10}></Paridade>
            </Card>
        </div>
    )
}

export default App