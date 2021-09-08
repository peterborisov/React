import { useContext, useState } from "react";
import { NotesContext } from "./NoteContext";

const NoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', note: { title, description } });
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='text' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type='submit' value='Add note' />
        </form>
    );
}

export default NoteForm;