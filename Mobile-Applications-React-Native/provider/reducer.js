import ACTION_TYPES from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.addNote:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case ACTION_TYPES.deleteNote:
      return {
        ...state,
        notes: [...state.notes.filter(item => item.id !== action.payload.id)]
      };
    default:
      throw new Error();
  }
};