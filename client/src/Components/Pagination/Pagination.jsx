import React from "react";

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
        <div>
             {prevpage > 0 && <button onClick={prevHandler}>prev</button>}
            {((recipeslength / page) >= 9) && <button onClick={nextHandler}>next</button>}
        </div>
    )
}