const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


const recipesRoute = require("./recipes.routes")
const dietsRoute = require ("./diets.routes")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesRoute)
router.use('/diets', dietsRoute)

module.exports = router;
