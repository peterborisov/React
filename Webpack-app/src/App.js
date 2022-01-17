import Navbar from './components/NavBar';
import NoteList from './components/Note/NoteList';
import { NoteContextProvider } from './provider/NoteContext';
import NoteForm from './components/Note/NoteForm';

const App = () => {
  return (
    <NoteContextProvider>
      <Navbar />
      <NoteList />
      <NoteForm />
    </NoteContextProvider>
  );
};

export default App;
