import styled from 'styled-components';

const BannerSection = styled.section`
    height: 170px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${(props) => props.imageUrl});
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
        height: 230px;
    }
`;

function BannerWithoutText({ imageUrl }) {
    return <BannerSection imageUrl={imageUrl} />;
}

export default BannerWithoutText;
