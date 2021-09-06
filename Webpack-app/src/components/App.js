import Navbar from './NavBar';
import Notelist from './Note/NoteList';
import NoteContextProvider from './Note/NoteContext';
import NoteForm from './Note/NoteForm';

const App = () => {
  return (
    <NoteContextProvider>
      <Navbar />
      <Notelist />
      <NoteForm />
    </NoteContextProvider>
  );
};

export default App;
