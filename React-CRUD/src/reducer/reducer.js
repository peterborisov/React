export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case "DELETE_USER":
      return {
        ...state,
        users: [...state.users.filter(item => item.id !== action.id)]
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
