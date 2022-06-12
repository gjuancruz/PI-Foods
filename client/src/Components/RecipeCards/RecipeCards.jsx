import React from 'react';
import './RecipeCards.css'
const RecipeCards = (props) =>{

    return(
        <div className='container'>
            <div className='estylo'>
                <img className='img' src={props.image} alt='recipe img'/>
                <h1 className='titletext'>{props.title}</h1>
                <p className='diettext'>{props.diet}</p>
            </div>
        </div>
    )
}

export default RecipeCards