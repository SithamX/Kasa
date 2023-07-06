//import { Link } from "react-router-dom"
import styled from "styled-components"
//import colors from "../../utils/style/colors"



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
    padding: 15px;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`

function CardHousing({ cover,  }) {
    return (
        <CardDiv>
            <CardImg src={cover} alt="photo_logement" />
        </CardDiv> 
    )
}

export default CardHousing