import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import Boys from '../pages/Boys'
import Girls from '../pages/Girls'
import Product from '../pages/Product'

function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Girls' element={<Girls/>}></Route>
                <Route path='/Boys' element={<Boys/>}></Route>
                <Route path='/Blog' element={<Blog/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/:id' element={<Product/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </div>
    )
}

export default MainRouter