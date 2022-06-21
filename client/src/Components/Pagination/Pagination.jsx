import React from "react";
import styles from './Pagination.module.css'

export const Paginacion = ({page, setPage, maxrecipes, recipeslength, perPage}) =>{
    const prevpage = page - 1
    const nextpage = page + 1
    const firstIndex = nextpage * perPage
    const nextHandler = () =>{
        
        
        // if(firstIndex >= recipeslength) return;
        setPage(nextpage)
    }
    const prevHandler = () =>{
        
        if(prevpage < 1){
            return alert('sdsad')
    }else{setPage(prevpage)};
        
    }
    return (
        <div >
            <div className={styles.pagination}>
             {prevpage > 0 && <button  classname={styles.btn} onClick={prevHandler}>« Prev</button>}
            {((recipeslength / page) > 9) && <button classname={styles.btn} onClick={nextHandler}>Next »</button>}
            </div>
        </div>
    )
}