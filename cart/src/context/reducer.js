import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_STARTED: return {...state, isLoading: true}
    case FETCH_PRODUCTS_SUCCESS: return {...state, isLoading: false, isError: false, cartProducts: payload}
    case FETCH_PRODUCTS_ERROR: return {...state, isError: true, isLoading: false}

    default:
      break;
  }
  return state;
};

export default reducer;
