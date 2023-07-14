import FilledStar from '../../assets/filled-star.png';
import EmptyStar from '../../assets/empty-star.png';
import styled from 'styled-components';

const StarsDiv = styled.div`
    display: flex;
    gap: 15px;
    @media (max-width: 566px) {
        gap: 10px;
    }
    @media (max-width: 425px) {
        gap: 8px;
    }
`;
const StarImg = styled.img`
    @media (max-width: 566px) {
        height: 20px;
    }
    @media (max-width: 425px) {
        height: 13px;
    }
`;

function StarRating({ rating }) {
    const maxStars = 5;

    const filledStars = Array(rating).fill(1);
    const emptyStars = Array(maxStars - rating).fill(1);

    return (
        <StarsDiv>
            {filledStars.map((_, index) => (
                <StarImg key={index} src={FilledStar} alt="Étoile remplie" />
            ))}
            {emptyStars.map((_, index) => (
                <StarImg key={index} src={EmptyStar} alt="Étoile vide" />
            ))}
        </StarsDiv>
    );
}

export default StarRating;
