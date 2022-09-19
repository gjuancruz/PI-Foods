import React, {useState, useEffect} from "react";
import styles from './RecipeCreate.module.css'
import { useDispatch , useSelector } from "react-redux"
import { getAllRecipesAct, postRecipe } from "../../redux/actions";
import { getAllDietsAct } from '../../redux/actions';
import {useHistory} from 'react-router-dom'

function validate(post){
    let errors = {}
    if(!post.title){
        errors.title = 'You must name your recipe.'
    }
    if(post.title.length > 40){
        errors.title = 'Your recipe name is too long.'
    }
    if(!/^[a-zA-Z\s]*$/.test(post.title)){
        errors.title = 'Recipe name can not contain numbers or special characters.'
    }
    if(!post.image){
        errors.image = 'You can add a URL image for your recipe (optional).'
    }
    if(post.image && ! /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(post.image)){
        errors.image = 'You must enter a valid URL for the recipe image. Else, a default one will be set.'
    }
    if(!post.diets.length){
        errors.diets = 'You must select at least one diet type.'
    }
    if(!post.summary){
        errors.summary = 'You must add a summary to your recipe.'
    }
    if(!post.steps.length){
        errors.steps = 'You must add steps to your recipe.'
    }
return errors
}

const CreateRecipe = ()=>{

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getAllDietsAct())
    }, [])

    React.useEffect(()=>{
        dispatch(getAllRecipesAct())
    }, [])
    
    const allDiets = useSelector(state=> state.diets)
    const recipes = useSelector(state => state.recipes)
    const [errors, setErrors] = useState({})
    
    const [post, setPost] = useState({
        title: "",
        summary: "",
        healthScore: 50,
        steps: [],
        image: "",
        diets: []  
    })

    


    function handleChange(e){
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value
          }));
    }

    

    function handleClick(e){
        if(e.target.checked === true){
            setPost({
                ...post,
                diets: [...post.diets, e.target.value]
            })
        }
        if (e.target.checked === false){
            const index = post.diets.indexOf(e.target.value)
            
            post.diets.splice((index), 1)
            
        }
        console.log(e.target.value)
    }


    function handleStepsChange(e){
        setPost({
            ...post,
            [e.target.name]: [ e.target.value]
        })
    }


    
    let titlecomprobation = 0
    let history = useHistory()
    function handleSubmit(e){
        if(!post.title){
            e.preventDefault()
            return alert("Recipe needs a title.")
        }
        if(post.title.length > 40){
            e.preventDefault()
            return alert("Your recipe's name is too long")
        
        }
        if(post.title && !/^[a-zA-Z\s]*$/.test(post.title)){
            e.preventDefault()
            return alert('Recipe name can not contain numbers or special characters.')
        }else if(!post.diets.length){
            e.preventDefault()
            return alert("Add at least one diet type for your recipe.")
        } else if(!post.summary){
            e.preventDefault()
            return alert("Recipe needs a summary.")
        } else if(!post.steps[0]){
            e.preventDefault()
            return alert("Recipe needs a step by step.")
        } else {
            if (!post.image || post.image && ! /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(post.image)) {
                post.image = "https://i.pinimg.com/originals/42/c3/a5/42c3a54a0ecec681b21fe32607359be2.jpg"
            }
        

            (recipes.map(r =>
                {if(r.title === post.title){
                    titlecomprobation = 1
                }}))

            if(titlecomprobation === 1){
                e.preventDefault()
                return alert("That recipe title already exists.")
            }else{
                dispatch(postRecipe(post))
                    alert("Recipe sucessfully created! You can now visualize it in the recipes page.")
                    setPost({
                        title: "",
                        summary: "",
                        spoonacularScore: 50,
                        healthScore: 50,
                        steps: "",
                        image: "",
                        diets: []
                })
            history.push('/recipes')
            }
            
        }
        console.log(post)
    }

    return(
        <div className={styles.container}>
        <form className={styles.form} >
            <h1>Create your own recipe.</h1>
        <div>
            <label className={styles.labeltitles}>Recipe name:</label>
            <input  type="text" value={post.title} name="title" onChange={(e) => handleChange(e)} />
            {errors.title &&(
            <p className={styles.danger}>{errors.title}</p>
            )}
        </div>

        <br/>

        <div>
            <label className={styles.labeltitles}>HealthScore:</label>
            <input  type="range" min="0" max="100" value={post.healthScore} name="healthScore" onChange={(e) => handleChange(e)}/>
            {/* <p>                    0                       100</p> */}
            <p>                                   {post.healthScore}</p>
        </div>

        <div>
        <label className={styles.labeltitles}>Recipe image URL:</label>
        <input  type="text" value={post.image} name="image" onChange={(e) => handleChange(e)}/>
        {errors.image &&(
            <p className={styles.urldanger}>{errors.image}</p>
            )}
        </div>

        <br/>

        
        <label className={styles.labeltitles}>Pick the diet type/s:</label>
        <br/>
        <div>
        {allDiets?.map(diets=>
        <div key = {diets.id}>
            <label>{diets.diets}</label>
            <input type="checkbox"  value={diets.id} key={diets.id} onChange={(e) => handleClick(e)}></input>
            </div>
            )}
            {errors.diets && <p className={styles.danger}>{errors.diets}</p>}
        </div>
        
        <div>
        <br/>
        <label className={styles.labeltitles}>Summary:</label>
        <br/>
        <textarea rows="4" cols="50" value={post.summary} name="summary" maxLength="1000" onChange={(e) => handleChange(e)}></textarea>
        </div>
        {errors.summary &&(
            <p className={styles.danger}>{errors.summary}</p>
            )}
        <div>
        <br/>
        <label className={styles.labeltitles}>Steps:</label>
        <br/>
        <textarea rows="4" cols="50" type='text' value={post.steps} name="steps" maxLength="1000" onChange={(e) => handleStepsChange(e)}></textarea>
        
        {errors.steps &&(
            <p className={styles.danger}>{errors.steps}</p>
            )}
        </div>
            
        <button type="submit" onClick={(e) => handleSubmit(e)}>Create Recipe</button>
            
      </form>
      </div>
    )
}

export default CreateRecipe;