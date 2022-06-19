const {Recipe, Diet} = require('../db')
const axios = require("axios")
require('dotenv').config()
const {API_KEY} = process.env

async function getAPIRecipes(){
    try{
    const apiAxios = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=99`)
    const apiRecipes = apiAxios.data.results.map(e=>{
        return{
        id: e.id,
        title: e.title,
        summary: e.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ''),
        healthScore: e.healthScore,
        diets: e.diets.map(each => ({diets: each})),
        steps: e.analyzedInstructions[0]?.steps.map(each => { return each.step }),
        image: e.image
        }
    })
    return apiRecipes
    }catch(err){
        console.log(err)
    }
}

async function getDBRecipes(){
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["diets"],
            through: {
                attributes: []
            } 
        }
     })
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