import React from 'react'
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'



const Landing = ()=> {

    return(
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>APPetite</h1>
                    <img className={styles.image} src='https://toppng.com/download/MsZnR5bf6uTh1SHbnJYE00foCndg0IJuU2O0K32FZ8gRPokn3TesNUObQBleFZoY80gK9XrxOBGir6rFTWkm5GR3JcvC7klrkbNbAgB5fzQuqDXWi81mJkG0gTEWMWutvX4LYbB8DGUBCWUnZJ8DBapgcBG6nsidvVwCQAWVXaH2qZROkZUornrM3kpGpo5ifMEApFKP/large'/>
                    <h3>You are what you eat.</h3>
                    <Link to ='/recipes'>
                    <button className = {styles.button} >Start</button>
                    </Link>
                </div>
            </div>
    )
}


export default Landing