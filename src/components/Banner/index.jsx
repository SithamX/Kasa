import styled from 'styled-components';
import HomeBannerImage from '../../assets/image-banner-home.jpg';
import AboutBannerImage from '../../assets/image-banner-about.jpg';
import colors from '../../utils/style/colors';
import { useLocation } from 'react-router-dom';

const BannerSection = styled.section`
    height: 150px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${HomeBannerImage});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.AboutPage {
        height: 170px;
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
            ),
            url(${AboutBannerImage});
        @media (max-width: 425px) {
            border-radius: 10px;
            height: 230px;
        }
    }
    @media (max-width: 490px) {
        justify-content: start;
    }
    @media (max-width: 425px) {
        border-radius: 10px;
    }
`;
const BannerTitle = styled.h1`
    color: ${colors.white};
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

function Banner() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <BannerSection
            className={location.pathname === '/about' ? 'AboutPage' : ''}
        >
            {isHomePage && (
                <BannerTitle>
                    Chez vous, <span>partout et ailleurs</span>
                </BannerTitle>
            )}
        </BannerSection>
    );
}

export default Banner;
