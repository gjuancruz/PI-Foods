const { Router } = require('express');
const router = Router();
const {dietsCreate, dietsList} = require('../controllers/diets');
const {Diet}= require('../models/Diet');

router.get('/', async(req, res)=>{
    try{
    await dietsCreate()
    const dietsResult = await dietsList()
    res.status(200).send(dietsResult)
    }catch(err){
        console.log(err)
    }
})



module.exports = router;
