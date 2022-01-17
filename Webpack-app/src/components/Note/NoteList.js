import { memo } from "react";
import Note from './Note';
import { useNotes } from '../../provider/NoteContext';

const NoteList = () => {
  const { state } = useNotes();
  return state.length ? (
    <div>
      <h1>Notes</h1>
      {state.map((note, index) => {
        return (<Note key={index} note={note} />);
      })}
    </div>
  ) : (
    <h1> No notes</h1>
  )
};

export default memo(NoteList);