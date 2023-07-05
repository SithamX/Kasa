import Logo from "../../assets/LOGO.png"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from "../../utils/style/colors"


const HeaderBalise = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 55px;
    border: 1px solid black;
`
const HeaderLogo = styled.img`
    width: 135px;
`
const StyledLink = styled(Link)`
    margin: 20px;
    text-decoration: none;
    color: ${colors.primary};
    &:hover {
        text-decoration: underline;
    }
`

function Header() {
    return (
        <HeaderBalise>
            <HeaderLogo src={Logo} alt="logo" />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </nav>
        </HeaderBalise>
    )
}

export default Header