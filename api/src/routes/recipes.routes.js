const { Router } = require('express');
const router = Router();
const {getAllRecipes} = require('../controllers/recipes');
const {Recipe} = require('../db');


router.get('/', async (req, res)=>{
    try{
        const {name} = req.query
        const allRecipes = await getAllRecipes()
        if(name){
        let filterByName = allRecipes.filter(n => n.title?.toLowerCase().includes(name.toString().toLowerCase()))
        if(filterByName.length){
            res.status(200).json(filterByName)
        } else {
            res.status(404).send("The recipe name you are looking for does not exist.")  
        }}else{
            res.status(200).json(allRecipes)
        }
    }catch(err){
        console.log(err)
    }
})



router.get('/:idRecipe', async (req, res)=>{
    try{
        const {idRecipe} = req.params
        const allRecipes = await getAllRecipes()
    if(idRecipe){
            let filterById = allRecipes.filter(n => n.id == idRecipe)
                if(filterById.length){
                     res.status(200).json(filterById)
        }else{
            res.status(404).send("The recipe ID you are looking for does not exist.")
        }
    }else{
        res.status(200).json(allRecipes)
    }
    }catch(err){
        console.log(error)
    }
})

router.post('/create', async(req, res)=>{
  
    try{
        let { title, summary, healthScore, diets, steps, image} = req.body
        
        const createdRecipe = await Recipe.create({
            title: title,
            summary: summary,
            healthScore: healthScore,
            steps: steps,
            image: image, 

        })

        await diets.map(diet => createdRecipe.addDiet(diet))
        res.status(201).send('recipe')
        
    }catch(error){
        console.log(error)
    }
})


module.exports = router;
