import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'



const Landing = ()=> {

    return(
            <div className='container'>
                <div className='box'>
                    <h1>APPetite</h1>
                    <Link to ='/recipes'>
                    <button className = 'button' >Start</button>
                    </Link>
                </div>
            </div>
    )
}


export default Landing