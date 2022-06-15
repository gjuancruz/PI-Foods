import { GET_ALL_RECIPES, SEARCH_RECIPES, GET_ALL_DIETS, SEARCH_RECIPES_ID} from "../actions";

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
        default: return state
      }
  }


  export default rootReducer