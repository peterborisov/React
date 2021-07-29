import './App.css';
import SearchForm from './components/searchForm';
import SearchContainer from './components/styledComponents/styledSearchContainer';
import Title from './components/styledComponents/styledTitle';
import MenuContainer from './components/styledComponents/styledMenuesContainer'

function App() {
  return (
    <div className="App">
      <>
        <SearchContainer>
          <Title>Meal Finder</Title>
          <SearchForm />
        </SearchContainer>
        <MenuContainer>
          <Title>Results find:</Title>
        </MenuContainer>
      </>
    </div>
  );
}

export default App;
