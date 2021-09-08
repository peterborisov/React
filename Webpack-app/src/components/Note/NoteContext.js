import { createContext, useReducer } from "react";
import { reducer } from './reducer';

//In component useContext(NotesContext)
export const NotesContext = createContext();

const initialState = [];

//Wrap App component with context
const NoteContextProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(reducer, initialState);
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

// export const useNotes = () => {
//     const context = useContext(NoteContextProvider);
//     if (context === undefined) {
//         throw new Error("useNotes can only be used inside NoteContextProvider");
//     }
//     return context;
// };

export default NoteContextProvider;