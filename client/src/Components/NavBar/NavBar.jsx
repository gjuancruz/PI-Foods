import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { getAllRecipesAct, orderByHealthScore, orderByTitle } from '../../redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css"
const NavBar = () =>{

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllRecipesAct())
    // },[])



const recipes = useSelector((state) => state.recipes)




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