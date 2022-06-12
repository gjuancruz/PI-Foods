import React from 'react'
import './App.css'
import LandingPage from "./Components/LandingPage/LandingPage"
import RecipeCards from "./Components/RecipeDetail/RecipeDetail"
import NavBar from "./Components/NavBar/NavBar"
import {BrowserRouter, Route} from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/recipes' component={NavBar} />
        <Route path='/recipes' component={RecipeCards} />
    </BrowserRouter>
  )
}

export default App;
