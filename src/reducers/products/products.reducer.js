import * as types from "./products.actionTypes";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.data],
      };

    case types.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.data.id ? { ...action.data } : product
        ),
      };

    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };

    default:
      return state;
  }
};

export default productsReducer;
