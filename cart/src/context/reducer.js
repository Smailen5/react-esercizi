import {
  ADD_QTY,
  DELETE_CART,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_QTY,
  TOTAL_COST,
} from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_STARTED:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartProducts: payload.map((product) => {
          return { ...product, qty: 3 };
        }),
      };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, isError: true, isLoading: false };
    case DELETE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (products) => products._id !== payload
        ),
      };
    case DELETE_CART:
      return { ...state, cartProducts: [] };
    case ADD_QTY:
      return {
        ...state,
        cartProducts: state.cartProducts.map((el) => {
          if (payload === el._id) {
            return { ...el, qty: el.qty + 1 };
          }
          return { ...el };
        }),
      };
    case REMOVE_QTY:
      return {
        ...state,
        cartProducts: state.cartProducts.map((el) => {
          if (payload === el._id) {
            return { ...el, qty: el.qty - 1 };
          }
          return { ...el };
        }),
      };
    case TOTAL_COST:
      return {
        ...state,
        // reduce accetta una callback function e un secondo parametro
        // la callback function puo accettare 4 parametri (accumulator, currentValue, index, array)
        totalPrice: state.cartProducts.reduce((total, item) => {
          return total + item.qty * item.price;
        }, 0),
      };
    default:
      break;
  }
  return state;
};

export default reducer;

// accumulator = valore corrente
// currentValue = valore del valore corrente
// index = indice del valore corrente
// array = array in esame
