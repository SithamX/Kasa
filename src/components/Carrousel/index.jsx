import { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/arrow-sharp.svg';
import colors from '../../utils/style/colors';

const CarrouselDiv = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 400px;
`;
const CarrouselArrows = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.ArrowLeft {
        left: 25px;
    }
    &.ArrowRight {
        transform: translateY(-50%) rotate(180deg);
        transform-origin: center;
        right: 25px;
    }
`;

const CarrouselPictures = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`;
const CarrouselCounter = styled.div`
    position: absolute;
    bottom: 25px;
    right: 50%;
    color: ${colors.white};
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
