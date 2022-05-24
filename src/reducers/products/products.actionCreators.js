import * as types from "./products.actionTypes";

export const createProductActionCreator = (data) => {
  return { type: types.CREATE_PRODUCT, data };
};

export const updateProductActionCreator = (data) => {
  return { type: types.UPDATE_PRODUCT, data };
};

export const deleteProductActionCreator = (id) => {
  return { type: types.DELETE_PRODUCT, id };
};
