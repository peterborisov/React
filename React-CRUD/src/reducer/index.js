import { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer'
import { fetchUsers, createUser, deleteUser } from '../requests'
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    users: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()

      dispatch({
        type: 'GET_USERS',
        payload: usersFromServer
      });
    }
    getUsers();
  }, [])

  const onUserCreate = (newUser) => {
    dispatch({
      type: 'ADD_USER',
      payload: createUser(newUser)
    });
  }

  const onUserDelete = async (id) => {
    dispatch({
      type: 'DELETE_USER',
      id: deleteUser(id)
    })
  }

  return (
    <UserContext.Provider value={{
      users: state.users,
      onUserCreate,
      onUserDelete,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUsers = () => useContext(UserContext);