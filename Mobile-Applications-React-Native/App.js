import Navbar from './components/NavBar';
import NoteList from './components/Note/NoteList';
import { NoteProvider } from './provider';
import NoteForm from './components/Note/NoteForm';

export default function App() {
  return (
    <NoteProvider>
      <Navbar />
      <NoteForm />
      <NoteList />
    </NoteProvider>
  );
}