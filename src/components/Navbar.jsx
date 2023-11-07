import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <div id='nav'>
                <h1><NavLink to='/' id='navbar'>Welcome!</NavLink></h1>
            <div>
            <NavLink to='/'id='navbar'>Home</NavLink>
            <NavLink to='/Girls' id='navbar'>Girls</NavLink>
            <NavLink to='/Boys' id='navbar'>Boys</NavLink>
            <NavLink to='/Blog' id='navbar'>Blog</NavLink>
            <NavLink to='/Contact' id='navbar'>Contact</NavLink>
            </div>
            </div>
        </div>
    )
}

export default Navigation