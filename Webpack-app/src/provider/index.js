import { createContext, useReducer, useContext } from "react";
import { reducer } from './reducer';

export const NotesContext = createContext();

const initialState = {
  notes: []
};

//Wrap App component with context
export const NoteProvider = ({ children }) => {
  const [value, actions] = useReducer(reducer, initialState);
  return (
    <NotesContext.Provider value={{ value, actions }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext);