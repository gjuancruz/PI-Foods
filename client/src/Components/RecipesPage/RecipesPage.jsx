import React, {useState} from 'react';
import { filterByDiet, getAllDietsAct, getAllRecipesAct, orderByHealthScore, orderByTitle } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCards from '../RecipeCards/RecipeCards';
import { Link } from "react-router-dom"
import styles from './RecipesPage.module.css'
import { Paginacion } from '../Pagination/Pagination';

const RecipePage = ()=>{
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        dispatch(getAllRecipesAct())
    }, [])
    
    React.useEffect(()=>{
        dispatch(getAllDietsAct())
    }, [])

    const recipes = useSelector(state=> state.recipes)
    const diets = useSelector(state=> state.diets)

    // PAGINATION //
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(9)
    const recipeslength = recipes.length
    const maxrecipes = recipes.length / perPage
    console.log(recipes.length)
    console.log(maxrecipes)
    // PAGINATION //


function handleSortTitle(e){
    e.preventDefault(e)
    dispatch(orderByTitle(e.target.value))
    setPage(1)
}

function handleSortHealthScore(e){
    e.preventDefault(e)
    dispatch(orderByHealthScore(e.target.value))
    setPage(1)
}

function handleDietFilter(e){
    e.preventDefault(e)
    dispatch(filterByDiet(e.target.value))
    setPage(1)
}

function notFound(){
    return <h1>aa</h1>
}

return(
    <div >
        
         <div className={styles.margen}>
                    <select onChange={(e) => handleSortTitle(e)}>
                        <option value="" >Filter alphabetically</option>
                        <option value="Asc">A to Z</option>
                        <option value="Desc">Z to A</option>
                    </select>
                
                    <select onChange={(e) => handleSortHealthScore(e)}>
                        <option value="" >Filter by HealthScore</option>
                        <option value="maxmin">Max - Min</option>
                        <option value="minmax">Min - Max</option>
                    </select>

                    <select onChange={(e) => handleDietFilter(e)}>
                        <option value=''>Filter by diet type</option>
                    {diets && diets.map(d=>
                        <option value={d.diets}>{d.diets}</option>)}
                    </select>
        </div>
        <div className={styles.recipeContainer}>
        {recipes && recipes.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map(r =>
            <div  key ={r.id}>
                <Link to={`/recipes/${r.id}`} className={styles.text}>
            <RecipeCards image={r.image} title={r.title} diets={r.diets.map(d => d.diets).join(', ')} />
                </Link>
            </div>
            )}
            
        </div>
        <div>
            <Paginacion page={page} setPage={setPage} maxrecipes = {maxrecipes} recipeslength = {recipeslength} perPage={perPage}/>
        </div>
        {!recipes.length && <h1>Not found</h1>}
    </div>
    )
}


export default RecipePage