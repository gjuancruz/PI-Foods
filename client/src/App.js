import React from 'react'
import './App.css'
import LandingPage from "./Components/LandingPage/LandingPage"
import RecipeCards from "./Components/RecipesPage/RecipesPage"
import NavBar from "./Components/NavBar/NavBar"
import {BrowserRouter, Route} from 'react-router-dom'
import DietCards from './Components/DietDetail/DietDetail'
import RecipeDetail from './Components/RecipeDetail/RecipeDetail'
import CreateRecipe from './Components/RecipeCreate/RecipeCreate'

function App(){
  return(
    <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/' component={NavBar} />
        <Route exact path='/recipes' component={RecipeCards} />
        <Route path='/diets' component={DietCards} />
        <Route exact path="/recipes/:id" component={RecipeDetail}/>
        <Route exact path="/create" component={CreateRecipe}/>
    </BrowserRouter>
  )
}

export default App;
