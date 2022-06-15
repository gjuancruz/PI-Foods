import React from 'react';
import styles from './DietCard.module.css'

const DietCards = (props) =>{

    return(
        <div className={styles.dietstext}>
            <h1>{props.diets}</h1>   
        </div>
    )
}

export default DietCards