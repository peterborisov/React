import { useContext, useState, memo } from "react";
import { NotesContext } from "./NoteContext";
import FormInput from "../FormInput";

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

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput placeholder='Enter title' value={title} handleOnchange={handleTitleChange} />
            <FormInput placeholder='Enter description' value={description} handleOnchange={handleDescriptionChange} />
            <input type='submit' value='Add note' />
        </form>
    );
}

export default memo(NoteForm);