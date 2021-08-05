import types from './itemTypes';

export const addItemAction = (payload) => {
  return { type: types.ADD_ITEM, payload };
};

export const removeItemAction = (id) => {
  return { type: types.REMOVE_ITEM, payload: { id } };
};

export const updateItemAction = (id, item) => {
  return { type: types.UPDATE_ITEM, payload: { id, item } };
};
