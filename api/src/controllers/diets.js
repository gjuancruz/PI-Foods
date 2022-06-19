const { Diet } = require("../db")
require('dotenv').config()
const { API_KEY } = process.env;


async function dietsCreate(){
    try{
    await Diet.bulkCreate([
        {diets: 'gluten free'},
        {diets: 'ketogenic'},
        {diets: 'vegetarian'},
        {diets: 'lacto ovo vegetarian'},
        {diets: 'ovo vegetarian'},
        {diets: 'vegan'},
        {diets: 'pescatarian'},
        {diets: 'paleolithic'},
        {diets: 'primal'},
        {diets: 'fodmap friendly'},
        {diets: 'whole 30'},
        {diets: 'dairy free'}
    ])
}catch(err){
    console.log(err)
}
}

async function dietsList(){
    try{
        return await Diet.findAll()
    }catch(err){
        console.log(err)
    }
}

module.exports = {dietsList, dietsCreate}
