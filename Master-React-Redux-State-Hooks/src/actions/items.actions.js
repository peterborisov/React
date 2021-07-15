const types = {
  GET_ITEMS: 'GET_ITEMS',
  POPULATE_ITEMS: 'POPULATE_ITEMS',
  POPULATE_ITEM_DETAILS: 'POPULATE_ITEM_DETAILS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_ITEM: 'UPDATE_ITEM',
  REMOVE_ITEM_RESULT: 'REMOVE_ITEM_RESULT',
  ADD_ITEM_RESULT: 'ADD_ITEM_RESULT',
};

export default types;

export const addItemRedux = (payload) => {
  return { type: types.ADD_ITEM, payload };
};

export const removeItemRedux = (id) => {
  return { type: types.REMOVE_ITEM, payload: { id } };
};

export const updateItemRedux = (id, item) => {
  return { type: types.UPDATE_ITEM, payload: { id, item } };
};

export const getAllItems = () => {
  return { type: types.GET_ITEMS };
};

export const populateItems = (items) => {
  return { type: types.POPULATE_ITEMS, payload: items };
};

export const populateItemDetails = (id, item) => {
  return { type: types.POPULATE_ITEM_DETAILS, payload: { id, item } };
};
