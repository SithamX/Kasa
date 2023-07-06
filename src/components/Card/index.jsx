//import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/colors"



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


const CardDiv = styled.div`
    max-width: 240px;
    height: 240px;
    margin: 15px;
    position: relative;
    display: inline-block;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
        opacity: 0.9;
    }
    @media (max-width: 630px) {
        max-width: none;
        width: 100%;
    }
`
const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const CardText = styled.p`
    position: absolute;
    bottom: 0;
    padding: 5px;
    color: ${colors.white};
    font-weight: 200;
    z-index: 1;
`

function CardHousing({ cover, title }) {
    return (
        <CardDiv>
            <CardImage src={cover} alt="photo_logement" />
            <CardText>{title}</CardText>
        </CardDiv> 
    )
}

export default CardHousing