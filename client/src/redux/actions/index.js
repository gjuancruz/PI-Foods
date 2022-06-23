import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const GET_ALL_DIETS = 'GET_ALL_DIETS'
export const SEARCH_RECIPES_ID = 'SEARCH_RECIPES_ID'
export const ORDER_BY_TITLE = 'ORDER_BY_TITLE'
export const ORDER_BY_HEALTHSCORE = 'ORDER_BY_HEALTHSCORE'
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
export const DELETE_RECIPE = 'DELETE_RECIPE'

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
    try {
      var jsonn = await axios.get(`http://localhost:3001/recipes?name=${title}`)
      return dispatch({
        type: SEARCH_RECIPES,
        payload: jsonn.data
      })
    } catch (error) {
      dispatch({
        type: SEARCH_RECIPES,
        payload: []
      })
    }
  }
}

export function getAllDietsAct(){
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/diets");
    return dispatch({
      type: GET_ALL_DIETS,
      payload: json.data,
    });
  };
}

export function searchRecipesIdAct(id){
  return async function (dispatch) {
      var json = await axios.get(`http://localhost:3001/recipes/${id}`)
      return dispatch({
        type: SEARCH_RECIPES_ID,
        payload: json.data
      })
  }
}

export function postRecipe(payload){
  return async function(){
      try {
          var json = await axios.post(`http://localhost:3001/recipes/create`, payload)
          return json
      } catch (error) {
          console.log(error)
      }
  }
}

export function orderByTitle(payload){
  return {
      type: ORDER_BY_TITLE,
      payload
  }
}

export function orderByHealthScore(payload){
  return {
      type: ORDER_BY_HEALTHSCORE,
      payload
  }
}

export function filterByDiet(payload){ 
  return {
      type: FILTER_BY_DIETS,
      payload
  }
}
