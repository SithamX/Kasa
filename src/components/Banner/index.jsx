import ImageBanner from '../../assets/image-banner-home.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const BannerSection = styled.section`
    height: 150px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${ImageBanner});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const BannerText = styled.h1`
    color: ${colors.white};
    font-weight: 300;
    font-size: 2em;
    @media (max-width: 768px) {
        font-size: 1.8em;
    }
`;

function BannerHome() {
    return (
        <BannerSection>
            <BannerText>Chez vous, partout et ailleurs</BannerText>
        </BannerSection>
    );
}

export default BannerHome;
