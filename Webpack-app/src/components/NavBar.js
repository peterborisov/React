import { useContext } from "react";
import { NotesContext } from "./Note/NoteContext";

const Navbar = () => {
    const { notes } = useContext(NotesContext);
    
    return (
        <h1>Number on notes you have: {notes.length}</h1>
    )
}

export default Navbar;