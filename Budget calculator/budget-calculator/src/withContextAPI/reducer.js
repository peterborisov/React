import { v1 as uuidv4 } from 'uuid';
import actionType from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.addExpense:
      return [...state, {
        cost: action.expense.cost,
        title: action.expense.title,
        id: uuidv4()
      }]
    case actionType.deleteExpense:
      return state.filter(expense => expense.id !== action.id)
    default:
      throw new Error();
  }
};