//Styled components
import { ResultContainer } from './styledComponents/resultContainer';
import {
    ItemWrapper,
    ItemHeader,
    ItemHeading,
    ItemBody,
    ItemParagraph,
    Image
} from "./styledComponents/item";

const MealResult = ( {data, loading}) => {
    return (
        <>
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

export default MealResult;
