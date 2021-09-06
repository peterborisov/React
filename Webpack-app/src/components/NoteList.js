import { useContext } from "react";
import NoteDetails from './NoteDetails';
import { NotesContext } from './NoteContext';

const Notelist = () => {
  const { notes } = useContext(NotesContext);
  return notes.length ? (
    <div>
      <h1>Notes</h1>
      {notes.map((note, index) => {
        return (<NoteDetails key={index} note={note} />);
      })}
    </div>
  ) : (
    <h1> No notes</h1>
  )
};

export default Notelist;