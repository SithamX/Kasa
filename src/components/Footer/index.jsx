import Logo from "../../assets/LOGO-WHITE.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const FooterBalise = styled.footer`
    background-color: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const FooterLogo = styled.img`
    width: 80px;
    margin-top: 40px;
`;
const FooterText = styled.p`
    padding: 5px;
    color: ${colors.white};
`;

function Footer() {
    return (
        <FooterBalise>
            <FooterLogo src={Logo} alt="logo" />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterBalise>
    );
}

export default Footer;
