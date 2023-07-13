import styled from 'styled-components';
import colors from '../../utils/style/colors';

const TagDiv = styled.div`
    background-color: ${colors.primary};
    border-radius: 10px;
    display: inline-block;
`;
const TagText = styled.p`
    color: ${colors.white};
    font-size: 0.9em;
    text-align: center;
    margin: 5px 40px;
`;

function Tag({ tags }) {
    return (
        <TagDiv>
            <TagText>{tags}</TagText>
        </TagDiv>
    );
}

export default Tag;
