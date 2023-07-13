import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Arrow from '../../assets/arrow-rounded.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CollapseDiv = styled.div`
    border-radius: 5px;
`;
const CollapseUnrollDiv = styled.div`
    background-color: ${colors.primary};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding-left: 15px;
    padding-right: 25px;
    cursor: pointer;
    &.HousingPage {
        padding-left: 20px;
        padding-right: 15px;
        border-radius: 10px;
        @media (max-width: 490px) {
            border-radius: 5px;
            height: 30px;
            padding-left: 10px;
            padding-right: 8px;
        }
    }
    @media (max-width: 490px) {
        height: 30px;
        padding-left: 10px;
        padding-right: 8px;
    }
`;
const CollapseTitle = styled.h2`
    margin: 0;
    color: ${colors.white};
    font-size: 1.5em;
    &.HousingPage {
        font-size: 1.1em;
        @media (max-width: 1024px) {
            font-size: 1em;
        }
        @media (max-width: 490px) {
            font-size: 0.85em;
        }
    }
    @media (max-width: 1024px) {
        font-size: 1.3em;
    }
    @media (max-width: 490px) {
        font-size: 0.85em;
    }
`;
const CollapseArrow = styled.img`
    width: 25px;
    user-select: none;
    &.ArrowUp {
        rotate: 180deg;
    }
    &.ArrowDown {
        rotate: 0deg;
    }
    @media (max-width: 1024px) {
        width: 22px;
    }
    @media (max-width: 490px) {
        width: 17px;
    }
`;
const CollapseDescription = styled.p`
    margin: 0;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    padding: 20px 25px 10px 15px;
    border-radius: 0 0 5px 5px;
    @media (max-width: 490px) {
        font-size: 0.8em;
        padding: 15px 12px 20px 12px;
    }
    &.HousingPage {
        border-radius: 0 0 10px 10px;
    }
`;

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { id } = useParams();

    const isHousingPage = location.pathname.includes('/housing/') && id;

    return (
        <CollapseDiv>
            <CollapseUnrollDiv
                onClick={() => setIsOpen(!isOpen)}
                className={isHousingPage ? 'HousingPage' : ''}
            >
                <CollapseTitle className={isHousingPage ? 'HousingPage' : ''}>
                    {title}
                </CollapseTitle>
                <CollapseArrow
                    src={Arrow}
                    className={isOpen ? 'ArrowUp' : 'ArrowDown'}
                    alt="Flèche de direction du collapse"
                />
            </CollapseUnrollDiv>
            {isOpen && (
                <CollapseDescription
                    className={isHousingPage ? 'HousingPage' : ''}
                >
                    {description}
                </CollapseDescription>
            )}
        </CollapseDiv>
    );
}

export default Collapse;
