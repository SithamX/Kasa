import ImageBanner from '../../assets/image-banner-home.jpg';
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
    @media (max-width: 490px) {
        justify-content: start;
    }
    @media (max-width: 425px) {
        border-radius: 10px;
    }
`;
const BannerText = styled.h1`
    color: ${colors.white};
    font-weight: 300;
    font-size: 2em;
    @media (max-width: 595px) {
        font-size: 1.8em;
    }
    @media (max-width: 490px) {
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 530px) {
        font-size: 1.7em;
    }
`;

function BannerHome() {
    return (
        <BannerSection>
            <BannerText>
                Chez vous, <span>partout et ailleurs</span>
            </BannerText>
        </BannerSection>
    );
}

export default BannerHome;
