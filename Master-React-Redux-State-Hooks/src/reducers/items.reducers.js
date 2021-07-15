import itemsTypes from '../actions/items.actions';

const reducer = (state = initialItems, action) => {
  let newItems;
  switch (action.type) {
    case itemsTypes.POPULATE_ITEMS:
      return action.payload;
    case itemsTypes.ADD_ITEM_RESULT:
      newItems = state.concat({ ...action.payload });
      return newItems;
    case itemsTypes.REMOVE_ITEM_RESULT:
      newItems = state.filter((item) => item.id !== action.payload.id);
      return newItems;
    case itemsTypes.POPULATE_ITEM_DETAILS:
    case itemsTypes.UPDATE_ITEM:
      newItems = [...state];
      const index = newItems.findIndex(
        (item) => item.id === action.payload.id
      );
      newItems[index] = { ...newItems[index], ...action.payload.item };
      return newItems;
    default:
      return state;
  }
};
export default reducer;

let initialItems =
    [
        {
            id: 1, description: 'Work income redux', value: 100, isExpense: false
        },
        {
            id: 2, description: 'Water bill', value: 20, isExpense: true
        },
        {
            id: 3, description: 'Rent', value: 200, isExpense: true
        },
        {
            id: 4, description: 'Power bill', value: 50, isExpense: false
        }
    ]
