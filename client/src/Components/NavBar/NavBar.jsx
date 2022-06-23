import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css"
const NavBar = () =>{

    return(
        <div>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/recipes">Recipes</a></li>
                <li><a href="/diets">Diets</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="#about">About</a></li>
                <SearchBar/>
               
                </ul>
        </div>
    )
}

export default NavBar