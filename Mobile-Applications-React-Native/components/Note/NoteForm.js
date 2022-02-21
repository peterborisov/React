import { useReducer, memo } from "react";
import { TextField, Button } from "@material-ui/core";
import { v1 as uuidv1 } from 'uuid';

import { useNotes } from "../../provider";

const reducer = (state, action) => {
  switch (action.type) {
    case "handleTextChange":
      return { ...state, [action.field]: action.payload };
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

  const handleTextChange = (e) => {
    dispatch({
      type: 'handleTextChange',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title, description, isNew, id: uuidv1()
    }
    actions.addNote(payload)
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
      <Button type='submit' variant="contained">Add Note</Button>
    </form>
  );
}

export default memo(NoteForm);