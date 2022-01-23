import Navbar from './components/NavBar';
import NoteList from './components/Note/NoteList';
import { NoteProvider } from './provider';
import NoteForm from './components/Note/NoteForm';

const App = () => {
  return (
    <NoteProvider>
      <Navbar />
      <NoteList />
      <NoteForm />
    </NoteProvider>
  );
};

export default App;
