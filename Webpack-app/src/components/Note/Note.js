import { memo } from "react";
import { useNotes } from "../../provider/NoteContext";

const Note = ({ note }) => {
  const { actions } = useNotes();

  return (
    <div onClick={() => actions({ type: 'DELETE_NOTE', id: note.id })}>
      <p>title: {note.title}, description: {note.description}</p>
    </div>
  );
};

export default memo(Note);