import { useNotes } from "../provider/NoteContext";

const Navbar = () => {
  const { state } = useNotes();

  return (
    <h1>Number on notes you have: {state.length}</h1>
  )
}

export default Navbar;