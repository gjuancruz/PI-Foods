import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'

export function getAllRecipesAct(){
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/recipes");
        return dispatch({
          type: GET_ALL_RECIPES,
          payload: json.data,
        });
      };
    }

export function searchRecipesAct(title){
  return async function (dispatch) {
      var jsonn = await axios.get(`http://localhost:3001/recipes?name=${title}`)
      return dispatch({
        type: SEARCH_RECIPES,
        payload: jsonn.data
      })
  }
}

