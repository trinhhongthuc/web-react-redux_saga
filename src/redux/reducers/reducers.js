import typeActions from "../typeAction";

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.GET_PRODUCTS_SAGA:
      return {
        ...state,
        isLoading: true,
      };
    case typeActions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case typeActions.GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
