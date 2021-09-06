import { createContext, useReducer } from "react";
import { v1 as uuidv1 } from 'uuid';

//In component useContext(NotesContext)
export const NotesContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {
                title: action.note.title,
                description: action.note.description,
                id: uuidv1()
            }]
        case "DELETE_NOTE":
            return state.filter(note => note.id !== action.id)
        default:
            throw new Error();
    }
};

const initialState = []
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