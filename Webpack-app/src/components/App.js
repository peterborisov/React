import Navbar from './NavBar';
import Notelist from './NoteList';
import NoteContextProvider from './NoteContext';
import NoteForm from './NoteForm';

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
