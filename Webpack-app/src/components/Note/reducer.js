import { v1 as uuidv1 } from 'uuid';
import actionType from "./actionType";

export const reducer = (state, action) => {
    switch (action.type) {
        case actionType.addNote:
            return [...state, {
                title: action.note.title,
                description: action.note.description,
                id: uuidv1()
            }]
        case actionType.deleteNote:
            return state.filter(note => note.id !== action.id)
        default:
            throw new Error();
    }
};