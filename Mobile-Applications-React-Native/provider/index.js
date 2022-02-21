import { createContext, useContext } from "react";

import { reducer } from './reducer';
import { useContextReducer } from "../helpers";
import ACTION_TYPES from "./actionType";

export const NotesContext = createContext();

const initialState = {
  notes: []
};

//Wrap App component with context
export const NoteProvider = ({ children, actionTypes = ACTION_TYPES }) => {
  const { value } = useContextReducer({ actionTypes, initialState, reducer })
  return (
    <NotesContext.Provider value={value}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext);