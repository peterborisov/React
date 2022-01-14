import { memo } from "react";
import NoteDetails from './NoteDetails';
import { useNotes } from '../../provider/NoteContext';

const Notelist = () => {
  const { value } = useNotes();
  return value.length ? (
    <div>
      <h1>Notes</h1>
      {value.map((note, index) => {
        return (<NoteDetails key={index} note={note} />);
      })}
    </div>
  ) : (
    <h1> No notes</h1>
  )
};

export default memo(Notelist);