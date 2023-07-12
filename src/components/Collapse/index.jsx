import { useState } from 'react';
import Arrow from '../../assets/arrow.svg';
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
    height: 40px;
    padding-left: 15px;
    padding-right: 25px;
    cursor: pointer;
    @media (max-width: 490px) {
        height: 33px;
        padding-right: 15px;
    }
`;
const CollapseTitle = styled.h2`
    margin: 0;
    color: ${colors.white};
    font-size: 1.2em;
    @media (max-width: 490px) {
        font-size: 0.9em;
    }
`;
const ArrowImg = styled.img`
    width: 19px;
    user-select: none;
    &.ArrowUp {
        rotate: 180deg;
    }
    &.ArrowDown {
        rotate: 0deg;
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
        font-size: 0.9em;
        padding: 20px 20px 20px 12px;
    }
`;

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CollapseDiv>
            <CollapseUnrollDiv onClick={() => setIsOpen(!isOpen)}>
                <CollapseTitle>{title}</CollapseTitle>
                <ArrowImg
                    src={Arrow}
                    className={isOpen ? 'ArrowUp' : 'ArrowDown'}
                    alt="Flèche de direction du collapse"
                />
            </CollapseUnrollDiv>
            {isOpen && <CollapseDescription>{description}</CollapseDescription>}
        </CollapseDiv>
    );
}

export default Collapse;
