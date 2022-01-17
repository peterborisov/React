import { useState, memo } from "react";
import { useNotes } from "../../provider/NoteContext";
import TextField from "@material-ui/core/TextField";

const NoteForm = () => {
  const { actions } = useNotes();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    actions({ type: 'ADD_NOTE', payload: { title, description } });
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type='submit' value='Add note' />
    </form>
  );
}

export default memo(NoteForm);