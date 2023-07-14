import Logo from '../../assets/logo-white.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterBalise = styled.footer`
    background-color: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const FooterLogo = styled.img`
    width: 110px;
    margin-top: 60px;
    margin-bottom: 40px;
    @media (max-width: 427px) {
        margin-bottom: 30px;
    }
`;
const FooterText = styled.p`
    color: ${colors.white};
    font-size: 1.4em;
    margin-top: 0;
    margin-bottom: 30px;
    @media (max-width: 980px) {
        font-size: 0.9em;
    }
    @media (max-width: 427px) {
        font-size: 0.75em;
        margin-bottom: 60px;
    }
`;

function Footer() {
    return (
        <FooterBalise>
            <FooterLogo src={Logo} alt="logo" />
            <FooterText>&copy; 2020 Kasa. All rights reserved</FooterText>
        </FooterBalise>
    );
}

export default Footer;
