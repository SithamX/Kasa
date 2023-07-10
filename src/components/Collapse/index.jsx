import { useState } from 'react';
import Arrow from '../../assets/arrow.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CollapseDiv = styled.div`
    border: 1px solid black;
    border-radius: 5px;
`;
const CollapseUnrollDiv = styled.div`
    background-color: ${colors.primary};
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding-left: 15px;
    padding-right: 25px;
`;
const ArrowImg = styled.img`
    rotate: 180deg;
    width: 20px;
`;
const CollapseTitle = styled.h2`
    margin: 0;
    color: ${colors.white};
    font-weight: 300;
    font-size: 1.3em;
`;
const CollapseDescription = styled.p`
    margin: 0;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    font-weight: 300;
    padding: 20px 25px 10px 15px;
    border-radius: 0 0 5px 5px;
`;

function Collapse() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CollapseDiv>
            <CollapseUnrollDiv>
                <CollapseTitle>Fiabilité</CollapseTitle>
                <ArrowImg src={Arrow} alt="" />
            </CollapseUnrollDiv>
            <CollapseDescription>Respect</CollapseDescription>
        </CollapseDiv>
    );
}

export default Collapse;
