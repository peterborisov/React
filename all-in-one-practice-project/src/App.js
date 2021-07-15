import Nav from './components/Navigation/Nav';
import MainSection from './components/MainSection/MainSection';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter />
      <Nav title='Nav menu' />
      <MainSection />
    </div>
  );
}

export default App;
