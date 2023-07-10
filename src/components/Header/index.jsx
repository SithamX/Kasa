import Logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HeaderBalise = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 60px;
    margin: auto;
    max-width: 1300px;
    @media (max-width: 980px) {
        padding: 20px 20px;
    }
`;
const HeaderLogo = styled.img`
    width: 135px;
    @media (max-width: 335px) {
        width: 120px;
    }
`;
const HeaderNav = styled.nav`
    width: 167px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 425px) {
        width: 150px;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 980px) {
        margin-top: 10px;
    }
    @media (max-width: 425px) {
        font-size: 0.95em;
        margin-left: 10px;
    }
`;

function Header() {
    return (
        <HeaderBalise>
            <HeaderLogo src={Logo} alt="logo" />
            <HeaderNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </HeaderNav>
        </HeaderBalise>
    );
}

export default Header;
