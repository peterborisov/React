import {
    SearchContainer,
    SearchInput,
    StyledForm,
    SearchButton,
    Title
} from './styledComponents/styledSearchContainer';
import MealResult from './mealResult';

//Hooks
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const SearchResult = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, loading] = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    
    return(
        <SearchContainer>
        <Title>Meal Finder</Title>
        <StyledForm>
            <SearchInput
                type="text"
                placeholder="Search"
                id="searchQuery"
                onChange={e => setSearchTerm(e.target.value)}
            />
            <SearchButton>
                <i className="fas fa-search"></i>
            </SearchButton>
        </StyledForm>
        <MealResult data={data} loading={loading}/>
    </SearchContainer>
    )
}

export default SearchResult;