import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Pages from '../pages/Pages'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Services' element={<Services/>}></Route>
                <Route path='/Pages' element={<Pages/>}></Route>
                <Route path='/Blog' element={<Blog/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
            </Routes>
        </div>
    )
}

export default MainRouter