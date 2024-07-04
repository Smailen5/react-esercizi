import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_CART,
  ADD_QTY,
  REMOVE_QTY,
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

    default:
      break;
  }
  return state;
};

export default reducer;
