import React from 'react';
import { getAllRecipesAct } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCards from '../RecipeCards/RecipeCards';
import { Link } from "react-router-dom"
import styles from './RecipesPage.module.css'

const RecipePage = ()=>{
    const dispatch = useDispatch()
React.useEffect(()=>{
    dispatch(getAllRecipesAct())
}, [])

const recipes = useSelector(state=> state.recipes)

return(
    <div>
        {recipes && recipes.map(r =>
            <div className={styles.recipeContainer} key ={r.id}>
                <Link to={`/recipes/${r.id}`} className={styles.text}>
            <RecipeCards image={r.image} title={r.title} diets={r.diets.map(d => d.diets).join(', ')} />
                </Link>
            </div>
            )}
    </div>
    )
}

export default RecipePage