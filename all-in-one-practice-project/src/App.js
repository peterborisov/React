import Nav from './components/Navigation/Nav';
import MainSection from './components/MainSection/MainSection';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Nav title='Nav menu' />
      <Counter />
      <MainSection />
    </div>
  );
}

export default App;
