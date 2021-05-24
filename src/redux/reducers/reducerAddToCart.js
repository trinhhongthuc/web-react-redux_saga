import typeActions from "../typeAction";

const initialState = {
  dataCart: [],
  error: "",
};

const fucAction = (id, id2) => {
  if (id === id2) return true;
  else if (id !== id2) return false;
};

const reducerAddToCart = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
      };

    case typeActions.ADD_PRODUCT_TO_CART_SUCESS:
      if (state.dataCart.length === 0) {
        return {
          ...state,
          dataCart: [...state.dataCart, action.payload],
        };
      } else if (state.dataCart.length > 0) {
        let data = "";
        state.dataCart.forEach((element) => {
          const rs = fucAction(element.payload._id, action.payload.payload._id);
          if (rs) {
            data = true;
            return;
          }
        });

        if (data) {
          return state;
        }
        return {
          ...state,
          dataCart: [...state.dataCart, action.payload],
        };
      }
      return state;

    case typeActions.ADD_PRODUCT_TO_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerAddToCart;
