import { useNotes } from "../provider/NoteContext";

const Navbar = () => {
  const { value } = useNotes();

  return (
    <h1>Number on notes you have: {value.length}</h1>
  )
}

export default Navbar;