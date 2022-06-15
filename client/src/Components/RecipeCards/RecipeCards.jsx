import React from 'react';
import styles from './RecipeCards.module.css'
const RecipeCards = (props) =>{

    return(
        <div className={styles.container}>
            <div className={styles.estylo}>
                <img className={styles.img} src={props.image} alt='recipe img'/>
                <h1 className={styles.titletext}>{props.title}</h1>
                <p className={styles.diettext}>{props.diets}</p>
            </div>
        </div>
    )
}

export default RecipeCards