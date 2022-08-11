import React, {useState} from 'react';
import { filterByDCreated, filterByDiet, getAllDietsAct, getAllRecipesAct, orderByHealthScore, orderByTitle } from '../../redux/actions';
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
    let notfound = useSelector(state=> state.notfound)
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

function handleCreatedFilter(e){
    e.preventDefault(e)
    console.log(e.target.value)
    dispatch(filterByDCreated(e.target.value))
}

// function notFound(){
//     setTimeout(() => {
//         return false
//     }, 5000);
// }
// let checked = notFound()
// let checked = true
// function chekecheka(){setTimeout(() => {
//     checked = false
// }, 5000);
// }

// chekecheka()
// console.log(checked)
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
                        <option key={d.id} value={d.diets}>{d.diets}</option>)}
                    </select>
                    <select onChange={(e) => handleCreatedFilter(e)}>
                        <option value=''>Filter by created</option>
                        <option value='created'>Created recipes</option>
                    </select>
        </div>
        <div>
            <Paginacion page={page} setPage={setPage} maxrecipes = {maxrecipes} recipeslength = {recipeslength} perPage={perPage}/>
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
        <div className={styles.loaderdiv}>
        {!recipes.length && notfound === false && <img className={styles.loader} src='https://media2.giphy.com/media/d2Sor6kd4bug3J3Srk/giphy.gif?cid=790b7611fb7e7c19372fba82d7a419e9fbe8e947d7fe1918&rid=giphy.gif&ct=s'/>}
        {!recipes.length && notfound === false && <h1>Loading...</h1>}
        {notfound === true && <h1>Not found</h1>}
        </div>
    </div>
    )
}


export default RecipePage