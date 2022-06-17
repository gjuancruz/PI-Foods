import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { searchRecipesAct } from '../../redux/actions';
import styles from './SearchBar.module.css'
const SearchBar = () => {
    
    const [state, setState]= React.useState({
        name:''
      })

      const handleChange = function(event){
        event.preventDefault()
        setState(event.target.value)
      }

    const dispatch = useDispatch()
    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(searchRecipesAct(state))
        setState('')
    }
    return (
        <form  onSubmit={(event)=>handleSubmit(event)} >
          <div>
          <input className={styles.input} onChange={(event) => handleChange(event) }
            type="text"
            placeholder="Recipe..."
            name='name'
          />
          <input type="submit" value="Search" className={styles.btn}/>
        </div>
        </form>
      );
}

export default SearchBar;