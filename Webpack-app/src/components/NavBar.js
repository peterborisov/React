import { useNotes } from "../provider";

const Navbar = () => {
  const { value } = useNotes();

  return (
    <h1>Number on notes you have: {value.notes.length}</h1>
  )
}

export default Navbar;