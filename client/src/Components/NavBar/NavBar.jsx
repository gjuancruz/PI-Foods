import React from 'react'

import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css"
const NavBar = ({onSearch}) =>{
    return(
        <div>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/recipes">Recipes</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <SearchBar/>
                </ul>
        </div>
    )
}

export default NavBar