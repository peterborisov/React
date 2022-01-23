import { useReducer, useState, memo } from "react";
import TextField from "@material-ui/core/TextField";
import { v1 as uuidv1 } from 'uuid';

import { useNotes } from "../../provider";


const reducer = (state, action) => {
  switch (action.type) {
    case "handleTextChange":
      return { ...state, [action.field]: action.payload };
    case 'toggleCheckbox':
      return { ...state, isNew: !state.isNew };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

const initialState = {
  title: '',
  description: '',
  isNew: false
};

const NoteForm = () => {

  const { actions } = useNotes();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, description, isNew } = state;

  const handleCheckbox = () => {
    dispatch({
      type: 'toggleCheckbox',
    })
  }

  const handleTextChange = (e) => {
    dispatch({
      type: 'handleTextChange',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actions({ type: 'ADD_NOTE', payload: { title, description, isNew, id: uuidv1() } });
    dispatch({ type: "reset" })
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField placeholder='Enter title'
        name='title'
        value={title}
        onChange={(e) => { handleTextChange(e) }}
      />
      <TextField placeholder='Enter description'
        name='description'
        value={description}
        onChange={(e) => { handleTextChange(e) }}
      />
      <input
        type='checkbox'
        name='isNew'
        value={isNew}
        onChange={() => { handleCheckbox() }}
      />
      <input type='submit' value='Add note' />
    </form>
  );
}

export default memo(NoteForm);