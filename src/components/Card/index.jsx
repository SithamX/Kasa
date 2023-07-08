import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/* const CardSection = styled.section`
    background-color: ${colors.secondary};
`
const CardHousing = styled.div`
    background: linear-gradient(to bottom, ${colors.primary}, ${colors.black} 99.999%);
    height: 260px;
    width: 250px;
    border-radius: 10px;
`
const HeaderLogo = styled.img`
    width: 135px;
`
const StyledLink = styled(Link)`
    margin-left: 40px;
    text-decoration: none;
    color: ${colors.primary};
    font-weight: 300;
    &:hover {
        text-decoration: underline;
    }
`

function Card() {
    return (
        <CardSection>
            <CardHousing />
            <HeaderLogo src={Logo} alt="logo" />
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
        </CardSection>
    )
}

export default Card */

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
    font-weight: 300;
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
