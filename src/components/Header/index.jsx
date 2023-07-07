import Logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HeaderBalise = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 70px;
    margin: auto;
    max-width: 1440px;
    @media (max-width: 768px) {
        padding: 20px 20px;
    }
`;
const HeaderLogo = styled.img`
    width: 135px;
`;
const StyledLink = styled(Link)`
    margin-left: 40px;
    text-decoration: none;
    color: ${colors.primary};
    font-weight: 300;
    &:hover {
        text-decoration: underline;
    }
`;

function Header() {
    return (
        <HeaderBalise>
            <HeaderLogo src={Logo} alt="logo" />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </nav>
        </HeaderBalise>
    );
}

export default Header;
