import { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/arrow-sharp.svg';
import colors from '../../utils/style/colors';

const CarrouselDiv = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 400px;
    @media (max-width: 850px) {
        height: 300px;
    }
    @media (max-width: 375px) {
        height: 265px;
    }
`;
const CarrouselArrows = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.ArrowLeft {
        left: 25px;
        @media (max-width: 375px) {
            left: 7px;
        }
    }
    &.ArrowRight {
        transform: translateY(-50%) rotate(180deg);
        transform-origin: center;
        right: 25px;
        @media (max-width: 375px) {
            right: 7px;
        }
    }
    @media (max-width: 1024px) {
        height: 65px;
    }
    @media (max-width: 768px) {
        height: 50px;
    }
    @media (max-width: 375px) {
        height: 20px;
    }
`;

const CarrouselPictures = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
    @media (max-width: 375px) {
        border-radius: 10px;
    }
`;
const CarrouselCounter = styled.div`
    position: absolute;
    bottom: 25px;
    right: 50%;
    color: ${colors.white};
    @media (max-width: 375px) {
        display: none;
    }
`;

function Carrousel({ pictures }) {
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage(
            currentImage === pictures.length - 1 ? 0 : currentImage + 1,
        );
    };
    const previousImage = () => {
        setCurrentImage(
            currentImage === 0 ? pictures.length - 1 : currentImage - 1,
        );
    };
    return (
        <CarrouselDiv>
            {pictures.length > 1 && (
                <CarrouselArrows
                    src={Arrow}
                    className="ArrowLeft"
                    alt="Fleche gauche"
                    onClick={previousImage}
                />
            )}
            <CarrouselPictures
                src={pictures[currentImage]}
                alt="Photo logement"
            />
            {pictures.length > 1 && (
                <CarrouselArrows
                    src={Arrow}
                    className="ArrowRight"
                    alt="Fleche gauche"
                    onClick={nextImage}
                />
            )}
            {pictures.length > 1 && (
                <CarrouselCounter>
                    {currentImage + 1}/{pictures.length}
                </CarrouselCounter>
            )}
        </CarrouselDiv>
    );
}

export default Carrousel;
