import { memo } from "react";
import Note from './Note';
import { useNotes } from '../../provider';

const NoteList = () => {
  const { value } = useNotes();
  return value.notes.length ? (
    <div>
      {value.notes.map((note, index) => {
        return (<Note key={index} note={note} />);
      })}
    </div>
  ) : (
    <h1> No notes</h1>
  )
};

export default memo(NoteList);