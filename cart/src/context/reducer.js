import { PROVA } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case PROVA:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
