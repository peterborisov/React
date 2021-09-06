import { useContext } from "react";
import { NotesContext } from "./NoteContext";

const NoteDetails = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <div onClick={() => dispatch({ type: 'DELETE_NOTE', id: note.id })}>
      <p>{note.title}</p>
      <p>{note.description}</p>
      <p>{note.id}</p>
    </div>
  );
};

export default NoteDetails;