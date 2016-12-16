import * as actions from '../actions/cheese.js';

const intital = {
  cheeses: [],
  loading: false,
  error: null
};

export const cheeseReducer = function(state = intital, action) {

  if (action.type === FETCH_CHEESES_REQUEST) {
    return {...state,
      loading:true}
  }
  else if (action.type === FETCH_CHEESES_SUCCESS) {
    return {...state,
      cheeses:action.cheeses,
      loading: false,
      error:null}
  }
  else if (action.type === FETCH_CHEESES_ERROR) {
    return {...state,
      loading: false,
      error: action.error}
  }
  return state;
};
