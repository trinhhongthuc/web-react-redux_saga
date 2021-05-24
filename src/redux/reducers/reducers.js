import typeActions from "../typeAction";

const initialState = {
  isLoading: true,
  error: "",
  data: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    // product
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

    // get product home page
    case typeActions.GET_PRODUCTS_HOME_SAGA:
      return {
        ...state,
        isLoading: false,
      };

    case typeActions.GET_PRODUCTS_HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case typeActions.GET_PRODUCTS_HOME_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case typeActions.REMOVE_SELECTED_PRODUCT:
      return { isLoading: true, error: "", data: [] };
    default:
      return state;
  }
};

export default reducers;
