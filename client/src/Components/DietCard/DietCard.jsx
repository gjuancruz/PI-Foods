import React from 'react';
import styles from './DietCard.module.css'

const DietCards = (props) =>{

    return(
        <div className={styles.dietstext}>
            <h3>{props.diets}</h3>   
        </div>
    )
}

export default DietCards