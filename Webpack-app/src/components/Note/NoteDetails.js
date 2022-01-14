import { memo } from "react";
import { useNotes } from "../../provider/NoteContext";

const NoteDetails = ({ note }) => {
  const { actions } = useNotes();
  const handleDelete = () => {
    actions({ type: 'DELETE_NOTE', id: note.id });
  }

  return (
    <div onClick={handleDelete}>
      <p>title: {note.title}, description: {note.description}</p>
    </div>
  );
};

export default memo(NoteDetails);