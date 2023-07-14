import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLink = styled(Link)`
    position: relative;
    display: inline-block;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 10px;
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
        pointer-events: none;
    }
    @media (max-width: 980px) {
        aspect-ratio: unset;
    }
`;
const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-out;
    &:hover {
        transform: scale(1.15);
    }
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

CardHousing.propTypes = {
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CardHousing;
