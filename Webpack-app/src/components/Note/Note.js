import { memo } from "react";
import { useNotes } from "../../provider";

const Note = ({ note }) => {
  const { actions } = useNotes();
  return (
    <div onClick={() => actions.deleteNote({ id: note.id })}>
      <p>{JSON.stringify(note)}</p>
    </div>
  );
};

export default memo(Note);