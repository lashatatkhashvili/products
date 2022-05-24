import {
  createProductActionCreator,
  updateProductActionCreator,
  deleteProductActionCreator,
} from "./products.actionCreators";

export const createProduct = (item) => {
  return (dispatch) => {
    dispatch(createProductActionCreator(item));
  };
};

export const updateProduct = (item) => {
  return (dispatch) => {
    dispatch(updateProductActionCreator(item));
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch(deleteProductActionCreator(id));
  };
};
