import React from "react";
import styles from './Pagination.module.css'

export const Paginacion = ({page, setPage, maxrecipes, recipeslength, perPage}) =>{
    const prevpage = page - 1
    const nextpage = page + 1

    const nextHandler = () =>{
        setPage(nextpage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const prevHandler = () =>{
        
        if(prevpage < 1){
            return alert('sdsad')
    }else{setPage(prevpage)};
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div >
            <div className={styles.pagination}>
             {prevpage > 0 && <button  classname={styles.btn} onClick={prevHandler}>« Prev</button>}
            {((recipeslength / page) > 9) && <button className={styles.btn} onClick={nextHandler}>Next »</button>}
            </div>
        </div>
    )
}