import React from 'react';
import { getAllRecipesAct, orderByHealthScore, orderByTitle } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCards from '../RecipeCards/RecipeCards';
import { Link } from "react-router-dom"
import styles from './RecipesPage.module.css'

const RecipePage = ()=>{
    const dispatch = useDispatch()
    const recipes = useSelector(state=> state.recipes)
React.useEffect(()=>{
    dispatch(getAllRecipesAct())
}, [])


function handleSortTitle(e){
    e.preventDefault(e)
    dispatch(orderByTitle(e.target.value))
}

function handleSortHealthScore(e){
    e.preventDefault(e)
    dispatch(orderByHealthScore(e.target.value))
}

return(
    
    <div >
         <div className={styles.margen}>
                    <select onChange={(e) => handleSortTitle(e)}>
                        <option value="" >Seleccione el orden</option>
                        <option value="Asc">A to Z</option>
                        <option value="Desc">Z to A</option>
                    </select>
                
                    <select onChange={(e) => handleSortHealthScore(e)}>
                        <option value="" >Seleccione el orden</option>
                        <option value="maxmin">Max - Min</option>
                        <option value="minmax">Min - Max</option>
                    </select>
        </div>
        <div className={styles.recipeContainer}>
        {recipes && recipes.map(r =>
            <div  key ={r.id}>
                <Link to={`/recipes/${r.id}`} className={styles.text}>
            <RecipeCards image={r.image} title={r.title} diets={r.diets.map(d => d.diets).join(', ')} />
                </Link>
            </div>
            )}
        </div>
    </div>
    )
}

export default RecipePage