//Styled components
import { ResultContainer } from './styledComponents/resultContainer';
import {
    SearchContainer,
    SearchInput,
    StyledForm,
    SearchButton,
    Title
} from './styledComponents/styledSearchContainer';
import {
    ItemWrapper,
    ItemHeader,
    ItemHeading,
    ItemBody,
    ItemParagraph,
    Image
} from "./styledComponents/item";

//Hooks
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const MenuResult = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, loading] = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    return (
        <>
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
            </SearchContainer>
            <ResultContainer>
                {loading ? (
                    "Loading..."
                ) : (
                    <>
                        {data.meals.map(obj => (
                            <div key={obj.idMeal}>
                                <ItemWrapper>
                                    <ItemHeader>
                                        <ItemHeading>{obj.strMeal}</ItemHeading>
                                    </ItemHeader>
                                    <ItemBody>
                                        <ItemParagraph>Area - {obj.strArea}</ItemParagraph>
                                        <Image src={obj.strMealThumb}></Image>
                                        <ItemParagraph>Instructions - {obj.strInstructions}</ItemParagraph>
                                    </ItemBody>
                                </ItemWrapper>
                            </div>
                        ))}
                    </>
                )}
            </ResultContainer>
        </>
    )
}

export default MenuResult;
