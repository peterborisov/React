import { useContext, memo } from "react";
import { NotesContext } from "./NoteContext";

const NoteDetails = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const handleDelete = () => {
    dispatch({ type: 'DELETE_NOTE', id: note.id });
  }

  return (
    <div onClick={handleDelete}>
      <p>{note.title}</p>
      <p>{note.description}</p>
      <p>{note.id}</p>
    </div>
  );
};

export default memo(NoteDetails);