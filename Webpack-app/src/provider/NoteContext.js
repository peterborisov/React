import { createContext, useReducer, useContext } from "react";
import { reducer } from './reducer';

export const NotesContext = createContext();

const initialState = [];

//Wrap App component with context
export const NoteContextProvider = ({ children }) => {
  const [state, actions] = useReducer(reducer, initialState);
  return (
    <NotesContext.Provider value={{ state, actions }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext);