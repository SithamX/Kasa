import styled from 'styled-components';
import HomeBannerImage from '../../assets/image-banner-home.jpg';
import AboutBannerImage from '../../assets/image-banner-about.jpg';
import colors from '../../utils/style/colors';
import { useLocation } from 'react-router-dom';

const BannerSection = styled.section`
    height: 200px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${HomeBannerImage});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    &.AboutPage {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
            ),
            url(${AboutBannerImage});
        @media (max-width: 850px) {
            height: 210px;
        }
        @media (max-width: 490px) {
            border-radius: 10px;
            height: 230px;
        }
    }
    @media (max-width: 850px) {
        height: 170px;
        margin-top: 10px;
    }
    @media (max-width: 490px) {
        justify-content: start;
        margin-top: 0;
        height: 120px;
    }
    @media (max-width: 425px) {
        border-radius: 10px;
    }
`;
const BannerTitle = styled.h1`
    color: ${colors.white};
    font-size: 3em;
    @media (max-width: 1024px) {
        font-size: 2.5em;
    }
    @media (max-width: 850px) {
        font-size: 2.2em;
    }
    @media (max-width: 595px) {
        font-size: 1.9em;
    }
    @media (max-width: 490px) {
        font-size: 1.7em;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
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
