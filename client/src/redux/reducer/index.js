import { GET_ALL_RECIPES, SEARCH_RECIPES, GET_ALL_DIETS, SEARCH_RECIPES_ID, ORDER_BY_TITLE, ORDER_BY_HEALTHSCORE} from "../actions";

const initialState = {
    recipes: [],
    diets:[],
    recipedetail: []
  };

  const rootReducer = (state = initialState, action) =>{
      switch(action.type){
        case GET_ALL_RECIPES:
            return{
              ...state,
              recipes: action.payload
            }
        case SEARCH_RECIPES:
            return{
              ...state,
              recipes: action.payload
            }
        case GET_ALL_DIETS:
            return{
              ...state,
              diets: action.payload
            }
        case SEARCH_RECIPES_ID:
            return{
              ...state,
              recipedetail: action.payload
            }
        case ORDER_BY_TITLE:
            // const sortedRecipesTitle = action.payload === "Asc" ? 
            // state.recipes.sort(function( a , b ) {
            //     if(a.title.toLowerCase() > b.title.toLowerCase()){
            //         return 1
            //     }
            //     if (b.title.toLowerCase() > a.title.toLowerCase()){
            //         return -1
            //     }
            //     return 0
            // }) : state.recipes.sort(function( a , b ) {
            //     if(a.title.toLowerCase() > b.title.toLowerCase()){
            //         return -1
            //     }
            //     if (b.title.toLowerCase() > a.title.toLowerCase()){
            //         return 1
            //     }
            //     return 0
            // })
            let sortedRecipesTitle
            
            if(action.payload === "Asc"){
              sortedRecipesTitle =  state.recipes.sort(function( a , b ) {
                    if(a.title.toLowerCase() > b.title.toLowerCase()){
                        return 1
                    }
                    if (b.title.toLowerCase() > a.title.toLowerCase()){
                        return -1
                    }
                    return 0
            })
          }
          if (action.payload === "Desc"){
            sortedRecipesTitle = state.recipes.sort(function( a , b ) {
                  if(a.title.toLowerCase() > b.title.toLowerCase()){
                      return -1
                  }
                  if (b.title.toLowerCase() > a.title.toLowerCase()){
                      return 1
                  }
                  return 0
          })
          }
        return {
            ...state,
            recipes: [...sortedRecipesTitle]
        }
        case ORDER_BY_HEALTHSCORE:
        //     const sortedRecipesHealth= action.payload === "maxmin" ? 
        //     state.recipes.sort(function( a , b ) {
        //         if(a.healthScore < b.healthScore){
        //             return 1
        //         }
        //         if (a.healthScore > b.healthScore){
        //             return -1
        //         }
        //         return 0
        //     }) : state.recipes.sort(function( a , b ) {
        //         if(a.healthScore < b.healthScore){
        //             return -1
        //         }
        //         if (a.healthScore > b.healthScore){
        //             return 1
        //         }
        //         return 0
        //     })
        // return {
        //     ...state,
        //     recipes: [...sortedRecipesHealth]
        // } 
        let sortedRecipesHealth
        if(action.payload === "maxmin"){
          sortedRecipesHealth = state.recipes.sort(function( a , b ) {
                    if(a.healthScore < b.healthScore){
                        return 1
                    }
                    if (a.healthScore > b.healthScore){
                        return -1
                    }
                    return 0
                })
        }
        if (action.payload === "minmax"){
          sortedRecipesHealth = state.recipes.sort(function( a , b ) {
                    if(a.healthScore > b.healthScore){
                        return 1
                    }
                    if (a.healthScore < b.healthScore){
                        return -1
                    }
                    return 0
                })
              }
              return {
                  ...state,
                  recipes: [...sortedRecipesHealth]
              } 
        default: return state
      }
  }


  export default rootReducer