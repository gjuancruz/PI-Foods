import React from 'react';
import { getAllRecipesAct } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCards from '../RecipeCards/RecipeCards';


const RecipeDetail = ()=>{
    const dispatch = useDispatch()
React.useEffect(()=>{
    dispatch(getAllRecipesAct())
}, [])

const recipes = useSelector(state=> state.recipes)

return(
    <div>
        {recipes && recipes.map(r =>
            <div key ={r.id}>
            <RecipeCards image={r.image} title={r.title} diet={r.diet.map(d => d.dietType).join(', ')} />
            </div>
            )}
    </div>
    )
}

export default RecipeDetail