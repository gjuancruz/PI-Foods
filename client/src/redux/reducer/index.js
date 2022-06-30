import { GET_ALL_RECIPES, SEARCH_RECIPES, GET_ALL_DIETS, SEARCH_RECIPES_ID, ORDER_BY_TITLE, ORDER_BY_HEALTHSCORE, FILTER_BY_DIETS, FILTER_BY_CREATED} from "../actions";

const initialState = {
    recipes: [],
    recipescopy: [],
    diets:[],
    recipedetail: []
  };

  const rootReducer = (state = initialState, action) =>{
      switch(action.type){
        case GET_ALL_RECIPES:
            return{
              ...state,
              recipes: action.payload,
              recipescopy: action.payload
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
            let sortedRecipesTitle
            if(action.payload === ""){
              return{
                ...state,
                recipes: [...state.recipescopy]
              }
            }

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
          if(action.payload === ""){
            return{
              ...state,
              recipes: [...state.recipescopy]
            }
          }
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

        case FILTER_BY_DIETS:
              const recipes = state.recipescopy
              const filter = action.payload === "" ? recipes : recipes.filter(recipe => {
                let diet = recipe.diets.map(d => d.diets)
                if (diet.includes(action.payload)){
                    return recipe
                }
            })  
        return {
            ...state,
            recipes: filter
        }
        
        case FILTER_BY_CREATED:
          const createdrecipes = state.recipescopy
          const filtercreated = action.payload === '' ? createdrecipes : 
          createdrecipes.filter(recipe=>
            recipe.id.length > 7
          )
          return{
            ...state,
            recipes:filtercreated
          }
       
        default: return state
      }
  }


  export default rootReducer