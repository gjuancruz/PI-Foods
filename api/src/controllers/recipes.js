const {Recipe} = require('../db')
const axios = require("axios")
require('dotenv').config()
const {API_KEY} = process.env

async function getAPIRecipes(){
    const apiAxios = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const apiRecipes = apiAxios.data.results.map(e=>{
        return{
        id: e.id,
        title: e.title,
        summary: e.summary,
        healthScore: e.healthScore,
        diet: e.diets.map(each=>({dietType: each}) ),
        steps: e.analyzedInstructions[0]?.steps.map(each => { return each.step }),
        image: e.image
        }
    })
    return apiRecipes
}

async function getDBRecipes(){
    try {
        return await Recipe.findAll()
    } catch (error) {
        console.log(error)
    }
}

async function getAllRecipes(){
try {
    const apiRecipes = await getAPIRecipes()
    const dbRecipes = await getDBRecipes()
    return apiRecipes.concat(dbRecipes)
} catch (error) {
    console.log(error)
}
}


module.exports = {
    getAPIRecipes,
    getDBRecipes,
    getAllRecipes,
}