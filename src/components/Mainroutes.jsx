import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from '../screens/Counter'
import Increment from '../screens/Increment'
import Decrement from '../screens/Decrement'
import Reset from '../screens/Reset'

const Mainroutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Counter /> } />
                <Route path='/incrementa' element={ <Increment /> } />
                <Route path='/decrementa' element={ <Decrement /> } />
                <Route path='/reinicia' element={ <Reset /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Mainroutes