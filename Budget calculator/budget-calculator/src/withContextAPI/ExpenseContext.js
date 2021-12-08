import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ExpenseContext = createContext();

const initialState = [];

const NoteContextProvider = ({ children }) => {
  const [expense, dispatch] = useReducer(reducer, initialState);
  return (
    <ExpenseContext.Provider value={{ expense, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default NoteContextProvider;