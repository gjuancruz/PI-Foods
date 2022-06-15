import React from "react";
import { useDispatch , useSelector } from "react-redux"
import {searchRecipesIdAct } from "../../redux/actions";
import { useEffect} from "react";
import { useParams} from "react-router-dom"
import styles from './RecipeDetail.module.css'

const RecipeDetail = ()=>{
    const dispatch = useDispatch()
    const recipeId = useParams()
    const detailRecipe = useSelector((state) => state.recipedetail) 
    useEffect(() => {
        dispatch(searchRecipesIdAct(recipeId.id))
    },[dispatch])

    return(
        <div>
        {detailRecipe && detailRecipe.map(d=>
        <div key={1} className={styles.container}>
            <div className={styles.box}>
            <h1>{detailRecipe[0].title}</h1>
            <img className={styles.img} src={detailRecipe[0].image} />
            <h3>HealthScore: {detailRecipe[0].healthScore}</h3>
            <p>This recipe is <b>{detailRecipe[0].diets.map(d => d.diets).join(', ')}</b>.</p>
            <h2>Summary</h2>
            <p className={styles.text}>{detailRecipe[0].summary}</p>
            <h2>¿How to prepare?</h2>
            {(detailRecipe[0].steps ?  detailRecipe[0].steps.map(s =>
                <p className={styles.text}>{s}</p>) : <p>Steps not available.</p>)}
            </div>
        </div>)
        }
        </div>
    )
}

export default RecipeDetail