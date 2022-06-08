const { Diet } = require("../db")
require('dotenv').config()
const { API_KEY } = process.env;


async function dietsCreate(){
    try{
    const diets = await Diet.bulkCreate([
        {diets: 'Gluten Free'},
        {diets: 'Ketogenic'},
        {diets: 'Vegetarian'},
        {diets: 'Lacto-Vegetarian'},
        {diets: 'Ovo-Vegetarian'},
        {diets: 'Vegan'},
        {diets: 'Pescetarian'},
        {diets: 'Paleo'},
        {diets: 'Primal'},
        {diets: 'Low FODMAP'},
        {diets: 'Whole30'},
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
