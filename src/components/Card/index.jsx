import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLink = styled(Link)`
    position: relative;
    display: inline-block;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
        );
        opacity: 1;
        border-radius: 10px;
    }
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 10px;
    }
`;
const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;
const CardText = styled.p`
    position: absolute;
    bottom: 0;
    padding: 15px;
    margin: 0;
    color: ${colors.white};
    font-size: 0.9em;
    z-index: 1;
`;

function CardHousing({ id, cover, title }) {
    return (
        <CardLink to={`/housing/${id}`}>
            <CardImage src={cover} alt="photo_logement" />
            <CardText>{title}</CardText>
        </CardLink>
    );
}

export default CardHousing;
