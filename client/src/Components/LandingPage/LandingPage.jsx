import React from 'react'
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'



const Landing = ()=> {

    return(
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>APPetite</h1>
                    <Link to ='/recipes'>
                    <button className = {styles.button} >Start</button>
                    </Link>
                </div>
            </div>
    )
}


export default Landing