import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import itemsReducer from '../reducers/items.reducers';
import modalsReducer from '../reducers/modals.reducers';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
  );

  return store;
};

export default configureStore;
