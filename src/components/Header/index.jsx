import Logo from '../../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HeaderBalise = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 5%;
    margin: auto;
    max-width: 1260px;
    @media (max-width: 1024px) {
        padding: 20px 40px;
    }
    @media (max-width: 850px) {
        padding: 20px 20px;
    }
`;
const HeaderLogo = styled.img`
    width: 190px;
    @media (max-width: 1024px) {
        width: 170px;
    }
    @media (max-width: 850px) {
        width: 155px;
    }
    @media (max-width: 375px) {
        width: 130px;
    }
    @media (max-width: 325px) {
        width: 110px;
    }
`;
const HeaderNav = styled.nav`
    width: 250px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        width: 200px;
    }
    @media (max-width: 850px) {
        width: 180px;
    }
    @media (max-width: 490px) {
        width: 160px;
    }
    @media (max-width: 375px) {
        width: 150px;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    font-size: 1.4em;
    margin-top: 10px;
    &.underline {
        text-decoration: underline;
    }
    @media (max-width: 1024px) {
        font-size: 1.2em;
    }
    @media (max-width: 490px) {
        text-transform: uppercase;
        font-size: 0.85em;
        margin-left: 10px;
    }
    @media (max-width: 375px) {
        font-size: 0.8em;
    }
`;

function Header() {
    const location = useLocation();

    return (
        <HeaderBalise>
            <HeaderLogo src={Logo} alt="logo" />
            <HeaderNav>
                <StyledLink
                    to="/"
                    className={location.pathname === '/' ? 'underline' : ''}
                >
                    Accueil
                </StyledLink>
                <StyledLink
                    to="/about"
                    className={
                        location.pathname === '/about' ? 'underline' : ''
                    }
                >
                    A Propos
                </StyledLink>
            </HeaderNav>
        </HeaderBalise>
    );
}

export default Header;
