import itemsTypes from '../actions/itemTypes';

const initialState = [{
  id: 1,
  description: 'test',
  value: '123'
}]
const reducer = (state = initialState, action) => {
  let newItems;
  switch (action.type) {
    case itemsTypes.ADD_ITEM:
      newItems = state.concat({ ...action.payload });
      return newItems;
    case itemsTypes.REMOVE_ITEM:
      newItems = state.filter((item) => item.id !== action.payload.id);
      return newItems;
    case itemsTypes.UPDATE_ITEM:
      newItems = [...state];
      const index = newItems.findIndex((item) => item.id === action.payload.id);
      newItems[index] = { ...newItems[index], ...action.payload.item };
      return newItems;
    default:
      return state;
  }
};
export default reducer;
