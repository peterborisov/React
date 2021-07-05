import { combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';

const configStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer
        })
    );
}

export default configStore;
