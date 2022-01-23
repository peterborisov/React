import actionType from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.addNote:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case actionType.deleteNote:
      return {
        ...state,
        notes: [...state.notes.filter(item => item.id !== action.id)]
      };
    default:
      throw new Error();
  }
};